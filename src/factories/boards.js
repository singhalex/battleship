import { createShip } from "./ships";

export const createBoard = () => {
    const width = 10;
    const height = 10;
    const shots = [];
    const sunkShips = [];

    const carrier = createShip(5);
    const battleship = createShip(4);
    const destroyer = createShip(3);
    const submarine = createShip(3);
    const patrolBoat = createShip(2);

    const ships = [];
    ships.push(patrolBoat);
    ships.push(submarine);
    ships.push(destroyer);
    ships.push(battleship);
    ships.push(carrier);

    const gameBoard = new Array(width);
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = new Array(height)
    }

    const placeShip = (x, y, horizontal = true) => {
        const ship = ships.pop();

        // Check to see if ship will fit on the board
        if (x + ship.length > 9 && horizontal) {
            ships.push(ship);
            return null;
        }
        if (y + ship.length > 9 && horizontal === false) {
            ships.push(ship);   
            return null;
        }

        // Check each square for ships before placing
        if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                if (gameBoard[x + i][y]) {
                    ships.push(ship);
                    return null;
                }
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                if (gameBoard[x][y + i]) {
                    ships.push(ship);
                    return null;
                }
            }
        }

        // Place ship on the board
        if (horizontal) {
            for (let i = 0; i < ship.length; i++) {
                gameBoard[x + i][y] = ship;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                gameBoard[x][y + i] = ship;
            }
        }
    }

    const receiveAttack = (xyArray) => {
        let alreadyHit = false;

        // Search the shot array for previous shots and return null if duplicated
        shots.forEach((element) => {
            if (JSON.stringify(element) == JSON.stringify([xyArray[0], xyArray[1]])) {
                alreadyHit = true;
            }
        })
        if (alreadyHit) return null;

        gameBoard[xyArray[0]][xyArray[1]].hit();
        if (gameBoard[xyArray[0]][xyArray[1]].isSunk()) {
            sunkShips.push(gameBoard[xyArray[0]][xyArray[1]]);
        }
        // Record the shot location
        shots.push([xyArray[0], xyArray[1]])
    }

    const allSunk = () => {
        if (sunkShips.length === 5) return true;
        return false;
    };

    return { gameBoard, placeShip, receiveAttack, allSunk }

}