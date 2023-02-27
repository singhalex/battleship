export const userInterface = () => {
    const buildGrid = (player) => {
        const container = document.querySelector(`#${player.name.toLowerCase()}-board`);
        for (let x = 0; x < player.board.grid.length; x++) {
            for (let y = 0; y < player.board.grid[x].length; y++) {
                const square = document.createElement('div');
                square.className = 'square';
                square.dataset.x = x;
                square.dataset.y = y;
                square.addEventListener('click', () => {
                    if (player.board.ships.length !== 0) {
                        player.board.placeShip(x, y)
                        console.log(player.board.ships)
                    }
                    console.log(square.dataset.x)
                    console.log(square.dataset.y)
                })
                container.appendChild(square);
            }
        }
    }

    return { buildGrid }
}