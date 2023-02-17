export const createShip = (length) => {
    let hits = 0;
    const getHits = () => hits;
    const hit = () => {
        hits += 1;
    }


    const isSunk = 1;
    return { length, getHits, hit}
}
