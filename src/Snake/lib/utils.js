const BLOCK_SIZE = 35;
// const HEADER_OFFSET = 48;
const GREEN = 'green';
let canvas;
let ctx;
let grid;

export function setUpCanvas() {
	canvas = document.getElementById('snake-board');
	grid = getGridSize(canvas);
	drawBorder(grid, canvas);
}

export function updateCanvas(setGame) {
	setGame((oldGame) => ({
		xPos: oldGame.xPos + BLOCK_SIZE,
		yPos: 0,
	}));
}

export function newGame() {
	return {
		xPos: 0,
		yPos: 0,
	};
}

function getGridSize() {
	// Calculate how many blocks can you fit in current canvas size (-1)
	// Calculate the excess border
	const { width, height } = canvas.getBoundingClientRect();
	const xBlocks = width / BLOCK_SIZE;
	const yBlocks = height / BLOCK_SIZE;

	// Adds 0.5 block to each size
	const borderX = xBlocks - Math.floor(xBlocks);
	const borderY = yBlocks - Math.floor(yBlocks);

	return {
		x: Math.floor(xBlocks),
		y: Math.floor(yBlocks),
		borderX,
		borderY,
	};
}

function drawBorder() {
	const { width, height } = canvas.getBoundingClientRect();
	ctx = canvas.getContext('2d');
	// Draw side borders:
	ctx.fillStyle = GREEN;
	ctx.fillRect(0, 0, grid.borderX, height);
	ctx.fillRect(width - grid.borderX, 0, grid.borderX, height);

	// Draw top-bottom borders:
	ctx.fillRect(0, 0, width, grid.borderY);
	ctx.fillRect(0, height - grid.borderY, width, grid.borderY);
}

export function drawCanvas(game) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBorder();
	ctx.fillStyle = 'red';
	ctx.fillRect(game.xPos, game.yPos, 35, 35);
}
