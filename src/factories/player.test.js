import { createPlayer } from "./player"

test('Create player named John', () => {
    const john = createPlayer('John');
    expect(john.name).toBe('John');
})
 
test('Player has a 10x10 game board', () => {
    const john = createPlayer('John');

    for (let i = 0; i < john.board.grid.length; i++) {
        expect(john.board.grid[i].length).toBe(10)
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
    for (let i = 0; i < 100; i++) { // Loop 100 times to make sure all squares are hit
        cpu.cpuAttack(john.board);
    }

    expect(john.board.allSunk()).toBe(true);
})

test('Player can attack the computer board', () => {
    const john = createPlayer('John');
    const cpu = createPlayer('CPU');
    cpu.board.placeShip(0,0);

    expect(john.playerAttack(cpu, [0, 0])).toBe('Hit!');
})

test('Player can sink the cpu carrier', () => {
    const john = createPlayer('John');
    const cpu = createPlayer('CPU');
    cpu.board.placeShip(0, 0);
    john.playerAttack(cpu, [0, 0]);
    john.playerAttack(cpu, [1, 0]);
    john.playerAttack(cpu, [2, 0]);
    john.playerAttack(cpu, [3, 0]);
    expect(john.playerAttack(cpu, [4, 0])).toBe('Carrier sunk!')
})