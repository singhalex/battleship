import { createBoard } from "./boards";

test('Game board should have a width of 10', () => {
    const board = createBoard();
    expect(board.grid.length).toBe(10)
});

test('Every column of game board should have a height of 10', () => {
    const board = createBoard();

    for (let i = 0; i < board.grid.length; i++) {
        expect(board.grid[i].length).toBe(10)
    }
});

test('Place a 5 length ship at coordinates [0,0] horizontally', () => {
    const carrierLength = 5;
    const x = 0;
    const y = 0;
    const board = createBoard();
    board.placeShip(x, y);

    expect(board.grid[x][y].length).toBe(carrierLength)
    expect(board.grid[x + 1][y].length).toBe(carrierLength)
    expect(board.grid[x + 2][y].length).toBe(carrierLength)
    expect(board.grid[x + 3][y].length).toBe(carrierLength)
    expect(board.grid[x + 4][y].length).toBe(carrierLength)
});

test('Place all ships on the board', () => {
    const board = createBoard();
    board.placeShip(0, 0); // Places the carrier 5 length
    board.placeShip(0, 1); // Places the battleship 4 length
    board.placeShip(0, 2); // Places the destroyer 3 length
    board.placeShip(0, 3); // Places the submarine 3 length
    board.placeShip(0, 4); // Places the patrol boat 2 length

    expect(board.grid[0][0].length).toBe(5)
    expect(board.grid[0][0 + 1].length).toBe(4)
    expect(board.grid[0][0 + 2].length).toBe(3)
    expect(board.grid[0][0 + 3].length).toBe(3)
    expect(board.grid[0][0 + 4].length).toBe(2)
});

test('Returns null if the ship does not fit on the board', () => {
    const board = createBoard();
    expect(board.placeShip(5, 1)).toBe(null);
    expect(board.placeShip(0, 6, false)).toBe(null);
    expect(board.placeShip(7,8)).toBe(null);
})

test('Place a 5 length ship at coordinates [1,1] vertically', () => {
    const battleshipLength = 5;
    const x = 1;
    const y = 1;
    const board = createBoard();
    board.placeShip(x, y, false);

    expect(board.grid[x][y].length).toBe(battleshipLength)
    expect(board.grid[x][y + 1].length).toBe(battleshipLength)
    expect(board.grid[x][y + 2].length).toBe(battleshipLength)
    expect(board.grid[x][y + 3].length).toBe(battleshipLength)
    expect(board.grid[x][y + 4].length).toBe(battleshipLength)
})

test('Returns null if the ship does not fit on the board vertically', () => {
    const x = 1;
    const y = 5;
    const board = createBoard();
    expect(board.placeShip(x, y, false)).toBe(null)
})

test('Returns null if trying to place a ship where a ship already exists', () => {
    const x = 1;
    const y = 1;
    const board = createBoard();
    board.placeShip(3, 0, false);

    expect(board.placeShip(x, y)).toBe(null)
})

test('Places a battleship if already tried to place it where a ship exits', () => {
    const board = createBoard();
    board.placeShip(3, 0, false); // Places carrier
    board.placeShip(1, 1); // Returns null
    board.placeShip(0, 0, false); // Places battleship
    
    expect(board.grid[0][0].length).toBe(4)
})

test('Send a hit to [1,1] where a ship is placed and the ship will increase its hit counter', () => {
    const board = createBoard();
    board.placeShip(0, 0);
    board.receiveAttack([0,0]);
    expect(board.grid[0][0].getHits()).toBe(1);
    expect(board.receiveAttack([1,0])).toBe('Hit!')
})

test('Sending a hit to a space that has already been hit returns null', () => {
    const board = createBoard();
    board.placeShip(0, 0);
    board.receiveAttack([0,0]);
    expect(board.receiveAttack([0,0])).toBe(null);
})

test('If all the ships have been sunk, the board returns true on allSunk method', () => {
    const board = createBoard();
    board.placeShip(0, 0); 
    board.receiveAttack([0, 0]);
    board.receiveAttack([1, 0]);
    board.receiveAttack([2, 0]);
    board.receiveAttack([3, 0]);
    board.receiveAttack([4, 0]);
    
    board.placeShip(0, 1); 
    board.receiveAttack([0, 1]);
    board.receiveAttack([1, 1]);
    board.receiveAttack([2, 1]);
    board.receiveAttack([3, 1]);
    
    board.placeShip(0, 2); 
    board.receiveAttack([0, 2]);
    board.receiveAttack([1, 2]);
    board.receiveAttack([2, 2]);
    
    board.placeShip(0, 3); 
    board.receiveAttack([0, 3]);
    board.receiveAttack([1, 3]);
    board.receiveAttack([2, 3]);
    
    board.placeShip(0, 4); 
    board.receiveAttack([0, 4]);
    board.receiveAttack([1, 4]);
    expect(board.allSunk()).toBe(true);
})

test('Shooting a square with no ship returns "Miss!"', () => {
    const board = createBoard();
    expect(board.receiveAttack([0,0])).toBe('Miss!')
})