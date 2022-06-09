const GREEN = 'green';
const GREEN_ACCENT = '#24BF4B';
const LIGHT_GREEN = 'lightgreen';
const BLOCK = 35;
let canvas;
let ctx;
export let grid;

export function setUpBoard() {
	canvas = document.getElementById('snake-board');
	ctx = canvas.getContext('2d');
	const width = canvas.width;
	const height = canvas.height;

	// Calculate grid
	grid = (() => {
		// Amount of blocks that fit in current canvas size
		const xSize = Math.floor(width / BLOCK) - 1;
		const ySize = Math.floor(height / BLOCK) - 1;

		// Grid "padding" in pixels for each side
		const xOffset = (width - xSize * BLOCK) / 2;
		const yOffset = (height - ySize * BLOCK) / 2;

		// Where each block start
		let xCords = Array.from({ length: xSize }, (_, i) => i * BLOCK + xOffset);
		let yCords = Array.from({ length: yOffset }, (_, i) => i * BLOCK + yOffset);

		return {
			xSize,
			ySize,
			xCords,
			yCords,
			xOffset,
			yOffset,
			width,
			height,
			blockSize: BLOCK,
		};
	})();

	drawBorders();
	drawGrid();
}

export function newSnake() {
	return {
		x: 3,
		y: 3,
		xPix: grid.xCords[3],
		yPix: grid.yCords[3],
		dir: 'Down',
	};
}

export function moveSnake(snake) {
	let xDir, yDir;
	switch (snake.dir) {
		case 'Up':
			xDir = 0;
			yDir = -1;
			break;
		case 'Down':
			xDir = 0;
			yDir = 1;
			break;
		case 'Left':
			xDir = -1;
			yDir = 0;
			break;
		case 'Right':
			xDir = 1;
			yDir = 0;
			break;
		default:
			break;
	}
	return {
		...snake,
		x: snake.x + xDir,
		y: snake.y + yDir,
		xPix: grid.xCords[snake.x + xDir],
		yPix: grid.yCords[snake.y + yDir],
	};
}

function drawBorders() {
	ctx.fillStyle = GREEN;

	// Left and right borders:
	ctx.fillRect(0, 0, grid.xOffset, canvas.height);
	ctx.fillRect(canvas.width - grid.xOffset, 0, grid.xOffset, canvas.height);

	// Top and bottom borders:
	ctx.fillRect(0, 0, canvas.width, grid.yOffset);
	ctx.fillRect(0, canvas.height - grid.yOffset, canvas.width, grid.yOffset);
}

function drawGrid() {
	for (let i = 0; i < grid.xSize; i++) {
		for (let j = 0; j < grid.ySize; j++) {
			// Alternate colors
			ctx.fillStyle = (i + j) % 2 ? GREEN_ACCENT : LIGHT_GREEN;
			ctx.fillRect(grid.xCords[i], grid.yCords[j], BLOCK, BLOCK);
		}
	}
}

export function drawSnake(snake) {
	ctx.fillStyle = 'red';
	ctx.fillRect(snake.xPix + 3.5, snake.yPix + 3.5, BLOCK - 7, BLOCK - 7);
}

export function updateBoard(snake) {
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	// drawBorders();
	// drawGrid();
	drawSnake(snake);
}
