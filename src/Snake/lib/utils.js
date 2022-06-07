import { createPortal } from 'react-dom';

const BLOCK = 35;
const GREEN = 'green';
const GREEN_ACCENT = '#24BF4B';

export function setUpCanvas() {
	const canvas = document.getElementById('snake-board');
	const grid = calculateGrid(canvas.width, canvas.height);
	drawBorders(canvas, grid);
	drawGrid(canvas, grid);
}

function calculateGrid(width, height) {
	const xSize = Math.floor(width / BLOCK) - 1;
	const ySize = Math.floor(height / BLOCK) - 1;
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
	let alt = true;
	ctx.lineWidth = '1px';
	for (let i = grid.xOffset; i < canvas.width - grid.xOffset; i += 35) {
		for (let j = grid.yOffset; j < canvas.height - grid.yOffset; j += 35) {
			ctx.fillStyle = alt ? GREEN_ACCENT : 'lightgreen';
			ctx.fillRect(i, j, 35, 35);
			alt = !alt;
		}
		alt = !alt;
	}
}
