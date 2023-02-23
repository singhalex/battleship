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

test('Computer can attack a random square', () => {
    const cpu = createPlayer('Computer');
    const john = createPlayer('John');
    john.board.placeShip(0, 0);
    john.board.placeShip(0, 1);
    john.board.placeShip(0, 2);
    john.board.placeShip(0, 3);
    john.board.placeShip(0, 4);
    for (let i = 0; i < 100; i++) {
        cpu.cpuAttack(john.board);
    }

    expect(john.board.allSunk()).toBe(true);

})