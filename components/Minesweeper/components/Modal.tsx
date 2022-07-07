/* This Modal component wraps a given component, 
making it a modal draggable window */

import { Dispatch, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { DispatchAction } from '../lib/mstypes';
import TitleBar from './MsWindow/TitleBar';

interface ModalProps {
	as: JSX.Element;
	title: string;
	dispatch?: Dispatch<DispatchAction>;
	exitOnBlur?: boolean;
	noTitleBar?: boolean;
}

export default function Modal(props: ModalProps) {
	const [modalPosition, setModalPosition] = useState(
		JSON.parse(localStorage.getItem('modalPosition')) || { x: 0, y: 0 }
	);
	const handleExitOnBlur = () => {
		props.dispatch({ type: 'exitModal' });
	};

	// Save last user position
	useEffect(() => {
		localStorage.setItem('modalPosition', JSON.stringify(modalPosition));
	}, [modalPosition]);

	return (
		<div
			onClick={props.exitOnBlur && handleExitOnBlur}
			className='modal-bg select-none'>
			<div className='static'>
				<Draggable
					handle='.handle'
					position={modalPosition}
					onDrag={(e, data) => setModalPosition({ x: data.x, y: data.y })}>
					<div className='windows-style-box flex flex-col gap-8'>
						{!props.noTitleBar && (
							<TitleBar title={props.title} dispatch={props.dispatch} />
						)}
						{props.as}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
