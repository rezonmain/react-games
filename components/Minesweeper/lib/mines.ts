import { coordToAddr, getAdjacentTiles } from './adjacent';
import { Coordinates, Game, Tile } from './mstypes';

export function generateMines(game: Game, event: MouseEvent): Game {
	let newTiles = structuredClone(game.board.tiles);
	const target = event.target as HTMLDivElement;
	const firstAddr = target.id;
	console.log(firstAddr);
	const minesAddresses = getRandomAddresses(
		game.board.mines,
		game.board.size,
		firstAddr
	);
	setTileProperties(minesAddresses, newTiles, game);

	return {
		...game,
		board: {
			...game.board,
			tiles: newTiles,
		},
	};
}

function getRandomAddresses(
	amount: number,
	size: Coordinates,
	firstAddr: string
): string[] {
	let addresses: string[] = [];
	while (addresses.length < amount) {
		const x = Math.floor(Math.random() * size.x);
		const y = Math.floor(Math.random() * size.y);
		const addr = coordToAddr({ x, y });
		if (!addresses.includes(addr) && addr !== firstAddr) {
			addresses.push(addr);
		}
	}
	return addresses;
}

function setTileProperties(mines: string[], tiles: Tile[], game: Game) {
	(function setMines() {
		tiles.forEach((tile) => {
			for (let i = 0; i < mines.length; i++) {
				const addr = mines[i];
				if (tile.address === addr) {
					tile.mine = true;
					break;
				}
			}
		});
	})();

	(function setValues() {
		mines.forEach((addr) => {
			const adjacent = getAdjacentTiles(addr, game);
			adjacent.forEach((tile) => (tile.value += 1));
		});
	})();
}
