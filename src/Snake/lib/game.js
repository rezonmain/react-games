import { newSnakes } from './snake';

export function newGame(grid) {
	const getRandomPos = () => {
		return {
			x: Math.floor(Math.random() * grid.xSize),
			y: Math.floor(Math.random() * grid.ySize),
		};
	};

	const game = {
		grid,
		snake: newSnakes(),
		dir: 'Stop',
		hit: false,
		food: getRandomPos(),
	};

	return game;
}
