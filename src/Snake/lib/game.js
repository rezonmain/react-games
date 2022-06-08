export class Snake {
	constructor(grid, ctx) {
		this.xPos = grid.xCords[Math.floor(Math.random() * grid.xSize)];
		this.yPos = grid.yCords[Math.floor(Math.random() * grid.ySize)];
		this.grid = grid;
		this.ctx = ctx;
	}

	draw() {
		this.ctx.fillStyle = 'blue';
		this.ctx.fillRect(
			this.xPos + 3.5,
			this.yPos + 3.5,
			this.grid.blockSize - 7,
			this.grid.blockSize - 7
		);
	}

	move() {}
}
