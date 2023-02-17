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

test('Add 2 hits to a 2 length ship and it will be sunk', () => {
    const sinkShip = createShip(2);
    sinkShip.hit();
    sinkShip.hit();
    expect(sinkShip.isSunk()).toBe(true);
})

test('Add 1 hit to a 2 length ship and it will not sink', () => {
    const unSunkShip = createShip(2);
    unSunkShip.hit();
    expect(unSunkShip.isSunk()).toBe(false);
})