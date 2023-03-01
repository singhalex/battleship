export const userInterface = () => {
    let thePlayer;
    let cpu;
    const ships = document.querySelector('#ships').children;
    const shipsCopy = [...ships];
    console.log(shipsCopy);
    const cpuInfo = document.querySelector('#cpu-info');
    const message = document.querySelector('span');
    message.textContent = 'Place the Carrier';
    const rotateButton = document.querySelector('#rotate');
    let degrees = 0;
    rotateButton.addEventListener('click', () => {
        rotateShips();
    })

    function rotateShips() {
        degrees = degrees === 0 ? 90 : 0;
        for (const ship of ships) {
            ship.classList.toggle('vertical');
        }
    }

    const buildGrid = (player) => {
        if (player.name === 'Player') thePlayer = player;
        if (player.name === 'CPU') cpu = player;
        const container = document.querySelector(`#${player.name.toLowerCase()}-board`);
        for (let x = 0; x < player.board.grid.length; x++) {
            for (let y = 0; y < player.board.grid[x].length; y++) {
                const square = document.createElement('div');
                square.dataset.x = x;
                square.dataset.y = y;

                square.className = 'square';
                if (player.name === 'CPU') {
                    cpuClickHandler(square, player);
                }

                if (player.name === 'Player') {
                    square.addEventListener('dragover', (e) => {
                        e.preventDefault();
                    });
                    square.addEventListener('drop', (e) => {
                        dropShip(e, player)
                    });

                }
                container.appendChild(square);
            }
        }
    }

    function dropShip(e, player) {
        const dropX = Number(e.target.dataset.x);
        const dropY = Number(e.target.dataset.y);
        const horizontal = degrees === 0;
            if (player.board.placeShip(dropX, dropY, horizontal) !== null) {
                paintSquares(dropX, dropY);
                draggedShip.remove();
                if (ships.length !== 0) {
                    ships[0].setAttribute('draggable', true)
                    message.textContent = `Place the ${ships[0].id}`
                } else {
                    message.textContent = 'Time to attack!'
                }
            };
    }

    function paintSquares(x, y) {
        let length;
        if (draggedShip.id === 'carrier') {
            length = 5;
        } else if (draggedShip.id === 'battleship') {
            length = 4;
        } else if(draggedShip.id === 'destroyer' || draggedShip.id === 'submarine') {
            length = 3;
        } else {
            length = 2;
        }

        if (degrees === 0) {
            for (let i = 0; i < length; i++) {
                document.querySelector(`[data-x="${x + i}"][data-y="${y}"]`).classList.add(`${draggedShip.id}`)
            }
        } else if (degrees === 90) {
            for (let i = 0; i < length; i++) {
                document.querySelector(`[data-x="${x}"][data-y="${y + i}"]`).classList.add(`${draggedShip.id}`)
            }
            
        }
    }

    function cpuClickHandler(square, player) {
        square.classList.add('hoverable')
        square.addEventListener('click', () => {
            const x = Number(square.dataset.x);
            const y = Number(square.dataset.y);
            const xyArray = [x, y];
            if (ships.length !== 0) {
                message.textContent = 'Place your ships first.';
                return
            };
            const attackResult = player.board.receiveAttack(xyArray);
            if (attackResult === 'Hit!'
                || attackResult === 'Patrol Boat sunk!'
                || attackResult === 'Carrier sunk!'
                || attackResult === 'Battleship sunk!'
                || attackResult === 'Destroyer sunk!') {
                    square.classList.add('hit')
                } else if (attackResult === 'Miss!') {
                    square.classList.add('miss')
                } else if (attackResult === null) return;
            message.textContent = attackResult;
            let gameOver = checkWin();
            if (gameOver) return;
            setTimeout(() => {
                let results = cpu.cpuAttack(thePlayer.board);
                cpuInfo.textContent = results.attackResult;
                const playerSquare = document.querySelector(`[data-x="${results.x}"][data-y="${results.y}"]`)

                if (results.attackResult === 'Hit!'
                || results.attackResult === 'Patrol Boat sunk!'
                || results.attackResult === 'Carrier sunk!'
                || results.attackResult === 'Battleship sunk!'
                || results.attackResult === 'Destroyer sunk!') {
                    playerSquare.classList.add('player-hit');
                } else if (results.attackResult === 'Miss!') {
                    playerSquare.classList.add('miss')
                }

                gameOver = checkWin();
                if (gameOver) return;
            }, 250);
        })
    }

    const winScreen = document.querySelector('#winning-message');
    function checkWin() {
        const winMessage = document.querySelector('#winning-text');
        if (thePlayer.board.allSunk()) {
            winScreen.classList.add('show');
            winMessage.textContent = 'Computer wins!';
            return true;
        }
        if (cpu.board.allSunk()) {
            winScreen.classList.add('show');
            winMessage.textContent = 'You win!'
            return true;
        }

        return false;

    }

    // Drag ships
    let draggedShip;
    for (const ship of ships) {
        ship.addEventListener('dragstart', dragstart)
    }

    function dragstart(e) {
        draggedShip = e.target;
    }

    const rebuildShips = () => {
        const shipsContainer = document.querySelector('#ships');
        shipsCopy.forEach(ship => {
            console.log(ship);
            shipsContainer.appendChild(ship);

        })
    }
    
    return { buildGrid, rebuildShips }

}