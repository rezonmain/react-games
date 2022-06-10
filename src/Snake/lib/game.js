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
	};
	return game;
}

export function newFood() {
	return {
		x: Math.floor(Math.random() * _grid.xSize),
		y: Math.floor(Math.random() * _grid.ySize),
	};
}
