import { createShip } from "./ships"

test('Create a ship object with a length property of 5', () => {
    const fiveShip = createShip(5, 0, false);
    expect(fiveShip.length).toBe(5);
});

test('Create a ship object with 2 hits', () => {
    const twoHitShip = createShip(0, 2, false);
    expect(twoHitShip.hits).toBe(2);
});