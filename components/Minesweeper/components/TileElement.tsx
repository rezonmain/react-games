import { Dispatch, useContext } from 'react';
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
	let style: any;

	switch (props.state) {
		case TileState.Flagged:
			style = {
				backgroundColor: 'red',
			};
			break;
		case TileState.Hidden: {
			style = {
				backgrounColor: '',
			};
			break;
		}
	}

	return (
		<div
			id={props.id}
			onMouseEnter={(e) =>
				props.dispatch({
					type: 'setActiveTile',
					payload: e.target as HTMLDivElement,
				})
			}
			onMouseLeave={(e) => {
				props.dispatch({
					type: 'setPrevActiveTile',
					payload: e.target as HTMLDivElement,
				});
			}}
			style={style}
			className='windows-style-box aspect-square w-8'></div>
	);
}
