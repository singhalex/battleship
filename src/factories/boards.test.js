import { createBoard } from "./boards";

test('Game board should have a width of 10', () => {
    const board = createBoard();
    expect(board.gameBoard.length).toBe(10)
})

test('Every column of game board should have a height of 10', () => {
    const board = createBoard();

    for (let i = 0; i < board.gameBoard.length; i++) {
        expect(board.gameBoard[i].length).toBe(10)
    }
})