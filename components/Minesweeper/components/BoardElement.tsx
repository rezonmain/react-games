import { Coordinates, Tile } from '../lib/mstypes';

interface BoardProps {
	size: Coordinates;
	tiles: Tile[];
}
export default function BoardElement(props: BoardProps) {
	const tileElements = props.tiles.map((tile) => {
		return tile.element;
	});
	const styles = {
		gridTemplateColumns: `repeat(${props.size.x}, minmax(0, 1fr))`,
	};
	return (
		<div style={styles} className={'grid bg-neutral-300'}>
			{tileElements}
		</div>
	);
}
