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
