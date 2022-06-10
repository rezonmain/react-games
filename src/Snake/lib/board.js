const GREEN = 'green';
const GREEN_ACCENT = '#24BF4B';
const LIGHT_GREEN = 'lightgreen';
const BLOCK = 35;
let canvas;
let ctx;

export function setUpBoard() {
	canvas = document.getElementById('snake-board');
	ctx = canvas.getContext('2d');
	const width = canvas.width;
	const height = canvas.height;

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
		let yCords = Array.from({ length: ySize }, (_, i) => i * BLOCK + yOffset);

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

	drawBorders(grid);
	drawGrid(grid);

	return grid;
}

function drawBorders(grid) {
	ctx.fillStyle = GREEN;

	// Left and right borders:
	ctx.fillRect(0, 0, grid.xOffset, canvas.height);
	ctx.fillRect(canvas.width - grid.xOffset, 0, grid.xOffset, canvas.height);

	// Top and bottom borders:
	ctx.fillRect(0, 0, canvas.width, grid.yOffset);
	ctx.fillRect(0, canvas.height - grid.yOffset, canvas.width, grid.yOffset);
}

function drawGrid(grid) {
	for (let i = 0; i < grid.xSize; i++) {
		for (let j = 0; j < grid.ySize; j++) {
			// Alternate colors
			ctx.fillStyle = (i + j) % 2 ? GREEN_ACCENT : LIGHT_GREEN;
			ctx.fillRect(grid.xCords[i], grid.yCords[j], BLOCK, BLOCK);
		}
	}
}

function drawSnake(game) {
	ctx.fillStyle = 'red';
	const g = game.grid;
	game.snake.forEach((s) => {
		ctx.fillRect(
			g.xCords[s.x] + 3.5,
			g.yCords[s.y] + 3.5,
			BLOCK - 7,
			BLOCK - 7
		);
	});
}

function drawFood(game) {
	const g = game.grid;
	const f = game.food;
	ctx.fillStyle = 'blue';
	ctx.fillRect(g.xCords[f.x] + 3.5, g.yCords[f.y] + 3.5, BLOCK - 7, BLOCK - 7);
}

export function updateBoard(game) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBorders(game.grid);
	drawGrid(game.grid);
	drawSnake(game);
	drawFood(game);
}
