import { createBoard } from "./boards";
import { createShip } from "./ships";

test('Game board should have a width of 10', () => {
    const board = createBoard();
    expect(board.gameBoard.length).toBe(10)
});

test('Every column of game board should have a height of 10', () => {
    const board = createBoard();

    for (let i = 0; i < board.gameBoard.length; i++) {
        expect(board.gameBoard[i].length).toBe(10)
    }
});

test('Place a 5 length ship at coordinates [0,0] horizontally', () => {
    const length = 5;
    const x = 0;
    const y = 0;
    const board = createBoard();
    board.placeShip(length, x, y);

    expect(board.gameBoard[x][y].length).toBe(length)
    expect(board.gameBoard[x + 1][y].length).toBe(length)
    expect(board.gameBoard[x + 2][y].length).toBe(length)
    expect(board.gameBoard[x + 3][y].length).toBe(length)
    expect(board.gameBoard[x + 4][y].length).toBe(length)
});

test('Place a 2 length ship at coordinates [0,1] horizontally', () => {
    const length = 2;
    const x = 0;
    const y = 1;
    const board = createBoard();
    board.placeShip(length, x, y);

    expect(board.gameBoard[x][y].length).toBe(length)
    expect(board.gameBoard[x + 1][y].length).toBe(length)
});

test('Returns null if the ship does not fit on the board', () => {
    const length = 5;
    const x = 5;
    const y = 1;
    const board = createBoard();
    expect(board.placeShip(length, x, y)).toBe(null)
})

test('Place a 5 length ship at coordinates [1,1] vertically', () => {
    const length = 5;
    const x = 1;
    const y = 1;
    const board = createBoard();
    board.placeShip(length, x, y, false);

    expect(board.gameBoard[x][y].length).toBe(length)
    expect(board.gameBoard[x][y + 1].length).toBe(length)
    expect(board.gameBoard[x][y + 2].length).toBe(length)
    expect(board.gameBoard[x][y + 3].length).toBe(length)
    expect(board.gameBoard[x][y + 4].length).toBe(length)
})

test('Returns null if the ship does not fit on the board vertically', () => {
    const length = 5;
    const x = 1;
    const y = 5;
    const board = createBoard();
    expect(board.placeShip(length, x, y, false)).toBe(null)
})

test('Returns null if trying to place a ship where a ship already exists', () => {
    const length = 5;
    const x = 1;
    const y = 1;
    const board = createBoard();
    board.placeShip(5, 3, 0, false);

    expect(board.placeShip(length, x, y)).toBe(null)
})

test('Send a hit to [1,1] where a ship is placed and the ship will increase its hit counter', () => {
    const board = createBoard();
    board.placeShip(5, 0, 0);
    board.receiveAttack(0, 0);
    expect(board.gameBoard[0][0].getHits()).toBe(1);
})

test('Sending a hit to a space that has already been hit returns null', () => {
    const board = createBoard();
    board.placeShip(5, 0, 0);
    board.receiveAttack(0, 0);
    expect(board.receiveAttack(0, 0)).toBe(null);
})

// test('')