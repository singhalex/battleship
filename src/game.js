import { createShip } from "./factories/ships";
import { createBoard } from "./factories/boards";
import { createPlayer } from "./factories/player";

const cpu = createPlayer('CPU');
cpu.board.placeShip(0, 0);
cpu.board.placeShip(1, 0);
cpu.board.placeShip(2, 0);
cpu.board.placeShip(3, 0);
cpu.board.placeShip(4, 0);

const player = createPlayer('Player');
player.board.placeShip(0, 0);
player.board.placeShip(1, 0);
player.board.placeShip(2, 0);
player.board.placeShip(3, 0);
player.board.placeShip(4, 0);

while (player.board.ships.length !== 0) {
    player.board.placeShip()
}

