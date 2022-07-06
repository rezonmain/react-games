import { Dispatch } from 'react';
import { DispatchAction, TileState } from '../lib/mstypes';

interface TileProps {
	id: string;
	value: number;
	state: TileState;
	mine: boolean;
	size: number;
	dispatch: Dispatch<DispatchAction>;
}
export default function TileElement(props: TileProps) {
	const style = {
		width: `${props.size}rem`,
	};
	return (
		<div
			id={props.id}
			onMouseDown={(e) => props.dispatch({ type: 'mouseDown', payload: e })}
			onMouseUp={(e) => props.dispatch({ type: 'mouseUp', payload: e })}
			onContextMenu={(e) => {
				e.preventDefault();
			}}
			style={style}
			className='windows-style-box aspect-square'></div>
	);
}
