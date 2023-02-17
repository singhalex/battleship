import { createShip } from "./ships"

test('Create a ship object with a length property of 5', () => {
    const fiveShip = createShip(5);
    expect(fiveShip.length).toBe(5);
});

test('Check the hits on a ship', () => {
    const getHitsShip = createShip(5);
    expect(getHitsShip.getHits()).toBe(0)
})

test('Add a hit to ship and expect number of hits to be 1', () => {
    const hitTheShip = createShip(5);
    hitTheShip.hit();
    expect(hitTheShip.getHits()).toBe(1);
})
test('Add 2 hits to ship and expect number of hits to be 2', () => {
    const hitTheShip = createShip(5);
    hitTheShip.hit();
    hitTheShip.hit();
    expect(hitTheShip.getHits()).toBe(2);
})