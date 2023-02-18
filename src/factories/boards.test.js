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
    const fiveShip = createShip(5);

    expect(board.gameBoard[x][y].length).toBe(fiveShip.length)
    expect(board.gameBoard[x + 1][y].length).toBe(fiveShip.length)
    expect(board.gameBoard[x + 2][y].length).toBe(fiveShip.length)
    expect(board.gameBoard[x + 3][y].length).toBe(fiveShip.length)
    expect(board.gameBoard[x + 4][y].length).toBe(fiveShip.length)
});

test('Place a 2 length ship at coordinates [0,0] horizontally', () => {
    const length = 2;
    const x = 0;
    const y = 0;
    const board = createBoard();
    board.placeShip(length, x, y);
    const fiveShip = createShip(2);

    expect(board.gameBoard[x][y].length).toBe(fiveShip.length)
    expect(board.gameBoard[x + 1][y].length).toBe(fiveShip.length)
});