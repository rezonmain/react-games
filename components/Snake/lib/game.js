import { newSnakes } from './snake';
let _grid;

export function newGame(grid) {
	_grid = grid;
	const game = {
		grid,
		snake: newSnakes(),
		dir: 'Stop',
		hit: false,
		food: newFood(),
		// First in first out buffer
		inputBuffer: [],
	};
	return game;
}

export function setFood(game) {
	const snake = game.snake;
	const food = game.food;
	let x, y;
	let collision = true;
	while (collision) {
		x = Math.floor(Math.random() * _grid.xSize);
		y = Math.floor(Math.random() * _grid.ySize);

		/*   Prevent food from spawning inside snake,
    or in the same position as previous food */
		for (let i = 0; i < snake.length; i++) {
			collision = x === snake[i].x && y === snake[i].y;
			if (collision) {
				break;
			}
		}
		collision = collision || (x === food.x && y === food.y);
	}
	return { x, y };
}

function newFood() {
	return {
		x: Math.floor(Math.random() * _grid.xSize),
		y: Math.floor(Math.random() * _grid.ySize),
	};
}
