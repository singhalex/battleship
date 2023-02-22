import { createShip } from "./ships";

export const createBoard = () => {
    const width = 10;
    const height = 10;
    const shots = [];

    const gameBoard = new Array(width);
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = new Array(height)
    }

    const placeShip = (length, x, y, horizontal = true) => {
        // Check to see if ship will fit on the board
        if (x + length > 9 && horizontal) return null;
        if (y + length > 9 && horizontal === false) return null;

        // Check each square for ships before placing
        if (horizontal) {
            for (let i = 0; i < length; i++) {
                if (gameBoard[x + i][y]) return null
            }
        } else {
            for (let i = 0; i < length; i++) {
                if (gameBoard[x][y + i]) return null
            }
        }

        // Create a ship and place it on the board
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

    const receiveAttack = (x, y) => {
        let alreadyHit = false;

        // Search the shot array for previous shots and return null if duplicated
        shots.forEach((element) => {
            if (JSON.stringify(element) == JSON.stringify([x, y])) {
                alreadyHit = true;
            }
        })
        if (alreadyHit) return null;

        gameBoard[x][y].hit();
        // Record the shot location
        shots.push([x, y])
    }

    const allSunk = false;

    return { gameBoard, allSunk, placeShip, receiveAttack }

}