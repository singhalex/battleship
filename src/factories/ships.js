export const createShip = (length) => {
    let hits = 0;
    const getHits = () => hits;
    const hit = () => {
        hits += 1;
    }

    const isSunk = () => {
        if (hits >= length) {
            return true;
        } else {
            return false;
        }
    };
    return { length, getHits, hit, isSunk}
}
