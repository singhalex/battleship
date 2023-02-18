import { createShip } from "./ships";

export const createBoard = () => {
    const width = 10;
    const height = 10;

    const gameBoard = new Array(width);
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = new Array(height)
    }

    const placeShip = (length, x, y) => {
        const fiveShip = createShip(length);
        for (let i = 0; i < length; i++) {
            gameBoard[x + i][y] = fiveShip;
        }
    }


    return {
        gameBoard, placeShip
    }

}