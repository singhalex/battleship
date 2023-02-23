import { createPlayer } from "./player"

test('Create player named John', () => {
    const john = createPlayer('John');
    expect(john.name).toBe('John');
})
 
test('Player has a 10x10 game board', () => {
    const john = createPlayer('John');

    for (let i = 0; i < john.board.gameBoard.length; i++) {
        expect(john.board.gameBoard[i].length).toBe(10)
    }
})
