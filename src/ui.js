export const userInterface = () => {
    const buildGrid = (grid) => {
        const container = document.querySelector('#board-container');
        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                const square = document.createElement('div');
                square.className = 'square';
                square.dataset.x = x;
                square.dataset.y = y;
                container.appendChild(square);
            }
        }
    }

    return { buildGrid }
}