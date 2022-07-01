import { Coordinates } from '../lib/mstypes';

interface BoardProps {
	size: Coordinates;
}
export default function Board(props: BoardProps) {
	return <div className=' bg-neutral-300 h-96 w-96'>Board</div>;
}
