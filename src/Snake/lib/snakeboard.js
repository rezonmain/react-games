import { Snake } from './game';

export function setUpBoard() {
	const GREEN = 'green';
	const GREEN_ACCENT = '#24BF4B';
	const LIGHT_GREEN = 'lightgreen';
	const BLOCK = 35;
	const canvas = document.getElementById('snake-board');
	const ctx = canvas.getContext('2d');
	const width = canvas.width;
	const height = canvas.height;
	let snake;

	// Calculate grid
	const grid = (() => {
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

	(function drawBorders() {
		ctx.fillStyle = GREEN;

		// Left and right borders:
		ctx.fillRect(0, 0, grid.xOffset, height);
		ctx.fillRect(width - grid.xOffset, 0, grid.xOffset, height);

		// Top and bottom borders:
		ctx.fillRect(0, 0, width, grid.yOffset);
		ctx.fillRect(0, height - grid.yOffset, width, grid.yOffset);
	})();

	(function drawGrid() {
		for (let i = 0; i < grid.xSize; i++) {
			for (let j = 0; j < grid.ySize; j++) {
				// Alternate colors
				ctx.fillStyle = (i + j) % 2 ? GREEN_ACCENT : LIGHT_GREEN;
				ctx.fillRect(grid.xCords[i], grid.yCords[j], BLOCK, BLOCK);
			}
		}
	})();

	(function createSnake() {
		snake = new Snake(grid, ctx);
		snake.draw();
	})();

	return snake;
}

export function updateBoard() {}
