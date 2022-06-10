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
	let moveIt = true;

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
			moveIt = false;
			break;
		default:
			break;
	}
	// Remove first item in buffer
	newBuff.shift();

	// Move snake head
	moveIt && newSnake.push(newHead);

	// Remove tail
	moveIt && newSnake.shift();

	const newHit = testCollision(newSnake, prev.grid);

	if (testAte(newSnake, food)) {
		const ateHead = { ...newSnake[newSnake.length - 1] };
		newSnake.unshift(ateHead);
		food = setFood(prev);
	}

	return {
		...prev,
		dir: newDir,
		snake: newSnake,
		hit: newHit,
		inputBuffer: newBuff,
		food,
	};
}

function testCollision(snake, grid) {
	let collision = false;
	const head = snake[snake.length - 1];

	// Self collision
	for (let i = 0; i < snake.length - 1; i++) {
		collision = head.x === snake[i].x && head.y === snake[i].y;
		if (collision) {
			break;
		}
	}
	// Border collision
	collision =
		collision ||
		head.x >= grid.xSize ||
		head.x < 0 ||
		head.y >= grid.ySize ||
		head.y < 0;

	return collision;
}

function testAte(snake, food) {
	const head = { ...snake[snake.length - 1] };
	return head.x === food.x && head.y === food.y;
}
