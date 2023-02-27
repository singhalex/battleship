export const userInterface = () => {
    const ships = document.querySelector('#ships').children;
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
        const container = document.querySelector(`#${player.name.toLowerCase()}-board`);
        for (let x = 0; x < player.board.grid.length; x++) {
            for (let y = 0; y < player.board.grid[x].length; y++) {
                const square = document.createElement('div');
                square.dataset.x = x;
                square.dataset.y = y;

                square.className = 'square';
                if (player.name === 'CPU') {
                    cpuClickHandler(square);
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
        console.log(dropX)
        if (player.board.ships.length !== 0) {
            
            if (player.board.placeShip(dropX, dropY, horizontal) !== null) {
                draggedShip.remove();
            };
            console.log(player.name);
            console.log(player.board.ships)
        }
    }

    function cpuClickHandler(square, player) {
        square.classList.add('hoverable')
        square.addEventListener('click', () => {
            if (ships.length !== 0) {
                const message = document.querySelector('span');
                message.textContent = 'Place your ships first.';
                return
            };
        })
    }

    // Drag ships
    let draggedShip;
    for (const ship of ships) {
        ship.addEventListener('dragstart', dragstart)
    }

    function dragstart(e) {
        draggedShip = e.target;
        console.log(draggedShip);
    }
    
    return { buildGrid }

}