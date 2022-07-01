/* This Modal component wraps a given component, 
making it a modal draggable window */

import Draggable from 'react-draggable';
import TitleBar from './TitleBar';

interface ModalProps {
	as: JSX.Element;
	title: string;
	onExit: () => void;
}

export default function Modal(props: ModalProps): JSX.Element {
	return (
		<div className='modal-bg'>
			<div className='centered'>
				<Draggable handle='.handle'>
					<div className='windows-style-box'>
						<TitleBar title={props.title} onExit={props.onExit} />
						{props.as}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
