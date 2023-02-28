import './style.css';
import { createPlayer } from './factories/player';
import { userInterface } from './ui';

const ui = userInterface();
const player = createPlayer('Player');
const cpu = createPlayer('CPU');
cpu.board.randomizeShips();

ui.buildGrid(player);
ui.buildGrid(cpu);
