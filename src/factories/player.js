import { createBoard } from "./boards"

export const createPlayer = (name) => {
    const board = createBoard();

    const cpuAttack = () => {

    }
    

    return {name, board, cpuAttack}
}