import { setFood } from './game';

export function newSnakes() {
	let snakes = [
		{
			x: 3,
			y: 1,
		},
		{
			x: 3,
			y: 2,
		},
		{
			x: 3,
			y: 3,
		},
	];
	return snakes;
}

export function setDirection(prev, dir) {
	let newDir;
	let newBuffer = prev.inputBuffer;

	/* Get latest item in the input buffer
  if buffer is empty use current direction */
	let prevInput = prev.inputBuffer[prev.inputBuffer.length - 1] || prev.dir;

	// Disallow oposite inputs
	switch (dir) {
		case 'Up':
			newDir = prevInput !== 'Down' ? 'Up' : 'Down';
			break;
		case 'Down':
			newDir = prevInput !== 'Up' ? 'Down' : 'Up';
			break;
		case 'Right':
			newDir = prevInput !== 'Left' ? 'Right' : 'Left';
			break;
		case 'Left':
			newDir = prevInput !== 'Right' ? 'Left' : 'Right';
			break;
		case 'Stop':
			newDir = 'Stop';
			break;
		default:
			break;
	}
	newBuffer.push(newDir);

	return {
		...prev,
		inputBuffer: newBuffer,
	};
}

export function move(prev) {
	let newSnake = prev.snake;
	let newHead = { ...newSnake[newSnake.length - 1] };
	let newBuff = prev.inputBuffer;
	let food = prev.food;

	/*   Set direction as first input in Buffer,
  if buffer is empty use current direction */
	let newDir = newBuff[0] || prev.dir;
	switch (newDir) {
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
	// Remove first item in buffer
	newBuff.shift();

	// Move snake head
	newSnake.push(newHead);

	// Remove tail
	newSnake.shift();

	if (testAte(newSnake, food)) {
		const ateHead = { ...newSnake[newSnake.length - 1] };
		newSnake.unshift(ateHead);
		food = setFood(prev);
	}

	return {
		...prev,
		dir: newDir,
		snake: newSnake,
		inputBuffer: newBuff,
		food,
	};
}

function testAte(snake, food) {
	const head = { ...snake[snake.length - 1] };
	return head.x === food.x && head.y === food.y;
}
