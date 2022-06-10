import { newFood } from './game';

export function newSnakes() {
	let snakes = [
		{
			x: 3,
			y: 3,
		},
		{
			x: 3,
			y: 2,
		},
		{
			x: 3,
			y: 1,
		},
	];
	return snakes;
}

export function setDirection(prev, dir) {
	let newDir;
	switch (dir) {
		case 'Up':
			newDir = prev.dir !== 'Down' ? 'Up' : 'Down';
			break;
		case 'Down':
			newDir = prev.dir !== 'Up' ? 'Down' : 'Up';
			break;
		case 'Right':
			newDir = prev.dir !== 'Left' ? 'Right' : 'Left';
			break;
		case 'Left':
			newDir = prev.dir !== 'Right' ? 'Left' : 'Right';
			break;
		case 'Stop':
			newDir = 'Stop';
			break;
		default:
			break;
	}
	return {
		...prev,
		dir: newDir,
	};
}

export function move(prev) {
	let newSnake = prev.snake;
	let newHead = { ...newSnake[newSnake.length - 1] };
	let food = prev.food;
	switch (prev.dir) {
		case 'Up':
			newHead.y = newHead.y - 1;
			break;
		case 'Down':
			newHead.y = newHead.y + 1;
			break;
		case 'Left':
			newHead.x = newHead.x - 1;
			break;
		case 'Right':
			newHead.x = newHead.x + 1;
			break;
		case 'Stop':
			break;
		default:
			break;
	}

	newSnake.push(newHead);
	newSnake.shift();

	if (testAte(newSnake, food)) {
		const ateHead = { ...newSnake[newSnake.length - 1] };
		newSnake.unshift(ateHead);
		food = newFood();
	}

	return {
		...prev,
		snake: newSnake,
		food,
	};
}

function testAte(snake, food) {
	const head = { ...snake[snake.length - 1] };
	return head.x === food.x && head.y === food.y;
}
