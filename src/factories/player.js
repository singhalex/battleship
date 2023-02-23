import { createBoard } from "./boards"

export const createPlayer = (name) => {
    const board = createBoard();

    const cpuAttack = (enemyBoard) => {
        const coordinates = [];
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        
        coordinates.push(x);
        coordinates.push(y);
        
        if (enemyBoard.receiveAttack(coordinates) === null) {
            cpuAttack(enemyBoard);
        }
    }

    const playerAttack = (cpu, xyArray) => {
        return cpu.board.receiveAttack(xyArray);
    }
    

    return {name, board, cpuAttack, playerAttack}
}