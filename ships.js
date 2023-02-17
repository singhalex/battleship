export const createShip = (length) => {
    let hits = 0;
    const getHits = () => hits;
    const isSunk = 1;
    return { length, getHits}
}
