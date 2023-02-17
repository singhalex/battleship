import { createShip } from "./ships"

test('Create a ship object with a length property of 5', () => {
    const fiveShip = createShip(5, 0, false);
    expect(fiveShip.length).toBe(5);
});

test('')