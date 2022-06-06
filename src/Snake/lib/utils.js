const BLOCK_SIZE = 35;
// const HEADER_OFFSET = 48;
const GREEN = 'green';

export function setUpCanvas() {
	const canvas = document.getElementById('snake-board');
	const grid = getGridSize(canvas);
	drawBorder(grid, canvas);
}

export function updateCanvas(state) {}

function getGridSize(canvas) {
	// Calculate how many blocks can you fit in current canvas size (-1)
	// Calculate the excess border
	const { width, height } = canvas.getBoundingClientRect();
	const xBlocks = width / BLOCK_SIZE;
	const yBlocks = height / BLOCK_SIZE;

	// Adds 0.5 block to each size
	const borderX = (xBlocks - Math.floor(xBlocks) + BLOCK_SIZE) / 2;
	const borderY = (yBlocks - Math.floor(yBlocks) + BLOCK_SIZE) / 2;

	return {
		x: Math.floor(xBlocks) - 1,
		y: Math.floor(yBlocks) - 1,
		borderX,
		borderY,
	};
}

function drawBorder(grid, canvas) {
	const { width, height } = canvas.getBoundingClientRect();
	const ctx = canvas.getContext('2d');
	// Draw side borders:
	ctx.fillStyle = GREEN;
	ctx.fillRect(0, 0, grid.borderX, height);
	ctx.fillRect(width - grid.borderX, 0, grid.borderX, height);

	// Draw top-bottom borders:
	ctx.fillRect(0, 0, width, grid.borderY);
	ctx.fillRect(0, height - grid.borderY, width, grid.borderY);
}

export function drawBackground() {}
