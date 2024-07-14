import {createMainMenu} from './components/MainMenu.js';
import {createMainFilter} from './components/MainFilter.js';
import {createMainSort} from './components/MainSort.js';
import {createBoardTask} from './components/BoardTask.js';
import {createAddTask} from './components/AddTask.js';
import {createCardTask} from './components/CardTask.js';
import {createBtnLoadMore} from './components/BtnLoadMore.js';


const render = function (container, template, place = `beforeend`) {
  container.insertAdjacentHTML(place, template);
};


const main = document.querySelector(`.main`);
// Menu
const mainMenu = document.querySelector(`.main__control.control.container`);
render(mainMenu, createMainMenu());
// Filter
render(main, createMainFilter());
// Sort
render(main, createMainSort());

// Board TASK
const boardContainer = document.querySelector(`.board.container`);
render(boardContainer, createBoardTask());

// Add TASK
const boardTasks = document.querySelector(`.board__tasks`);
render(boardTasks, createAddTask());

// form TASK
const COUNT_CARD = 3;
for (let i = 0; i < COUNT_CARD; i++) {
  render(boardTasks, createCardTask());
}

// button
render(boardContainer, createBtnLoadMore());
