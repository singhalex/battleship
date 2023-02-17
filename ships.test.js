import { createShip } from "./ships"

test('Create a ship object with a length property of 5', () => {
    const fiveShip = createShip(5);
    expect(fiveShip.length).toBe(5);
});

test('Check the hits on a ship', () => {
    const getHitsShip = createShip(5);
    expect(getHitsShip.getHits()).toBe(0)
})