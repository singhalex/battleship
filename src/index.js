import './style.css';
import { createPlayer } from './factories/player';
import { userInterface } from './ui';

//Initialize the boards and build the grids
const ui = userInterface();
let player = createPlayer('Player');
let cpu = createPlayer('CPU');
cpu.board.randomizeShips();

ui.buildGrid(player);
ui.buildGrid(cpu);

// Re-initialize the game state
const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', () => {
    document.querySelector('#player-board').innerHTML = '';
    document.querySelector('#cpu-board').innerHTML = '';
    player = createPlayer('Player');
    cpu = createPlayer('CPU');
    cpu.board.randomizeShips();
    
    ui.buildGrid(player);
    ui.buildGrid(cpu);
    document.querySelector('#winning-message').classList.remove('show');
    ui.rebuildShips();
})
