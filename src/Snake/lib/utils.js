const BLOCK = 35;
const GREEN = 'green';
const GREEN_ACCENT = '#24BF4B';

let grid;

export function setUpCanvas() {
	const canvas = document.getElementById('snake-board');
	grid = calculateGrid(canvas.width, canvas.height);
	drawBorders(canvas, grid);
	drawGrid(canvas, grid);
}

export function updateCanvas(setSnake, snake) {
	setSnake((old) => {
		return {
			xPos: old.xPos + BLOCK,
			yPos: grid.yOffset,
		};
	});
	drawSnake(snake);
}

export function newSnake(canvas) {
	grid = calculateGrid(canvas.width, canvas.height);
	return {
		xPos: grid.xOffset,
		yPos: grid.yOffset,
	};
}

function drawSnake(snake) {
	const canvas = document.getElementById('snake-board');
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	drawBorders(canvas, grid);
	drawGrid(canvas, grid);
	ctx.fillStyle = 'red';
	ctx.fillRect(snake.xPos, snake.yPos, BLOCK, BLOCK);
}

function calculateGrid(width, height) {
	// Amount of blocks that fit in current canvas size
	const xSize = Math.floor(width / BLOCK) - 1;
	const ySize = Math.floor(height / BLOCK) - 1;

	// Grid "padding" in pixels for each side
	const xOffset = (width - xSize * BLOCK) / 2;
	const yOffset = (height - ySize * BLOCK) / 2;

	return {
		xSize,
		ySize,
		xOffset,
		yOffset,
	};
}

function drawBorders(canvas, grid) {
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = GREEN;

	// Left and right borders:
	ctx.fillRect(0, 0, grid.xOffset, canvas.height);
	ctx.fillRect(canvas.width - grid.xOffset, 0, grid.xOffset, canvas.height);

	// Top and bottom borders:
	ctx.fillRect(0, 0, canvas.width, grid.yOffset);
	ctx.fillRect(0, canvas.height - grid.yOffset, canvas.width, grid.yOffset);
}

function drawGrid(canvas, grid) {
	const ctx = canvas.getContext('2d');

	// TODO: fix alternating colors not working on every size
	let alt = true;

	for (let i = grid.xOffset; i < canvas.width - grid.xOffset; i += BLOCK) {
		for (let j = grid.yOffset; j < canvas.height - grid.yOffset; j += BLOCK) {
			ctx.fillStyle = alt ? GREEN_ACCENT : 'lightgreen';
			ctx.fillRect(i, j, BLOCK, BLOCK);
			alt = !alt;
		}
		alt = !alt;
	}
}
