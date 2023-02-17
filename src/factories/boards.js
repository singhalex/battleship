export const createBoard = () => {
    const width = 10;
    const height = 10;

    const gameBoard = new Array(width);
    for (let i = 0; i < gameBoard.length; i++) {
        gameBoard[i] = new Array(height)
    }


    return {
        gameBoard
    }

}