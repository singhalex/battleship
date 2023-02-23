import { createBoard } from "./boards"

export const createPlayer = (name) => {
    const board = createBoard();
    

    return {name, board}
}