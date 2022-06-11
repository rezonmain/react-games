import { nanoid } from 'nanoid';
export function newTiles(size) {
	const startTiles = 2;

	// In power of 2
	const maxStartTileValue = 2;

	const tiles = Array.from({ length: size }, (_, i) => {
		return Array.from({ length: size }, (_, j) => ({ id: nanoid(), value: 0 }));
	});

	return tiles;
}
