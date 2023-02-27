export const userInterface = () => {
    const buildGrid = (player) => {
        const container = document.querySelector(`#${player.name.toLowerCase()}-board`);
        for (let x = 0; x < player.board.grid.length; x++) {
            for (let y = 0; y < player.board.grid[x].length; y++) {
                const square = document.createElement('div');
                square.dataset.x = x;
                square.dataset.y = y;

                square.className = 'square';
                if (player.name === 'CPU') {
                    square.classList.add('hoverable')
                    square.addEventListener('click', () => {
                        if (ships.length !== 0) {
                            const message = document.querySelector('span');
                            message.textContent = 'Place your ships first.';
                            return
                        };

                        if (player.board.ships.length !== 0) {
                            player.board.placeShip(x, y)
                            console.log(player.name)
                            console.log(player.board.ships)
                        }
                        console.log(square.dataset.x)
                        console.log(square.dataset.y)
                    })
                }
                container.appendChild(square);
            }
        }
    }



    const rotateButton = document.querySelector('#rotate');
    const ships = document.querySelector('#ships').children
    let degrees = 0;
    rotateButton.addEventListener('click', () => {
        degrees = degrees === 0 ? 90 : 0;
        for (const ship of ships) {
            ship.classList.toggle('vertical');
        }
    })

    return { buildGrid }
}