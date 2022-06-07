const BLOCK = 35;

export function setUpCanvas() {
	const canvas = document.getElementById('snake-board');
	const grid = calculateGrid(canvas.width, canvas.height);
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

function drawGrid(canvas, grid) {
	const ctx = canvas.getContext('2d');
	for (let i = grid.xOffset; i < canvas.width - grid.xOffset; i += 35) {
		for (let j = grid.yOffset; j < canvas.height - grid.yOffset; j += 35) {
			ctx.rect(i, j, 35, 35);
			ctx.strokeStyle = 'black';
			ctx.lineWidth = '1px';
			ctx.stroke();
		}
	}
}
