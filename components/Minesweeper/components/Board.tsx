import { Coordinates } from '../lib/mstypes';

interface BoardProps {
	size: Coordinates;
}
export default function Board(props: BoardProps): JSX.Element {
	return <div className=' bg-neutral-300 h-96 w-96'>Board</div>;
}
