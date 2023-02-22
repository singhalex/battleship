import { createShip } from "./ships";

export const createBoard = () => {
    const width = 10;
    const height = 10;

    const gameBoard = new Array(width);
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = new Array(height)
    }

    const placeShip = (length, x, y, horizontal = true) => {

        if (x + length > 9) return null;
        const ship = createShip(length);
        if (horizontal) {
            for (let i = 0; i < length; i++) {
                gameBoard[x + i][y] = ship;
            }
        } else {
            for (let i = 0; i < length; i++) {
                gameBoard[x][y + i] = ship;
            }
        }
    }

    return {
        gameBoard, placeShip
    }

}