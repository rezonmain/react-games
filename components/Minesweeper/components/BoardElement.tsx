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
		gridTemplateColumns: `repeat(${props.size.x}, 1fr)`,
	};
	return (
		<div
			id='board-container'
			className='windows-style-box m-0.5 border-[6px] p-3 w-fit flex flex-col gap-3'>
			<header
				id='board-header'
				className='windows-style-deboss border-[6px] flex flex-row justify-between h-16 px-3 items-center'>
				<div
					id='counter'
					className='windows-style-deboss w-10 h-5 border-[2px]'>
					counter
				</div>
				<div id='reset-button' className='windows-style-button w-5 h-5'>
					😸
				</div>
				<div
					id='counter'
					className='windows-style-deboss w-10 h-5 border-[2px]'>
					counter
				</div>
			</header>
			<div
				id='board-tiles-container'
				className=' max-w-[100vw] overflow-scroll'>
				<div
					id='board-tiles'
					style={styles}
					className='grid bg-neutral-300 windows-style-deboss border-[6px]'>
					{tileElements}
				</div>
			</div>
		</div>
	);
}
