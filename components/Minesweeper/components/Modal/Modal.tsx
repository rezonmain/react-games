import Draggable from 'react-draggable';
import { Coordinates, MenuAction } from '../../lib/mstypes';
import Options from '../Options';
import Board from '../Board';
import Stats from '../Stats';
import TitleBar from './TitleBar';

interface ModalProps {
	type: MenuAction;
	exit: () => void;
	boardSize?: Coordinates;
}

export default function Modal(props: ModalProps): JSX.Element {
	let element: JSX.Element;
	let title = 'Minesweeper';
	switch (props.type) {
		case 'beginner':
			element = <Board size={{ x: 9, y: 9 }} />;
			break;
		case 'intermediate':
			element = <Board size={{ x: 16, y: 16 }} />;
			break;
		case 'expert':
			element = <Board size={{ x: 16, y: 30 }} />;
			break;
		case 'custom':
			element = <Board size={props.boardSize} />;
			title += ' | Custom';
			break;
		case 'stats':
			element = <Stats />;
			title += ' Stats';
			break;
		case 'options':
			element = <Options />;
			title += ' Options';
			break;
	}
	return (
		<div className='modal-bg'>
			<div className='centered'>
				<Draggable handle='.handle'>
					<div className='windows-style-box'>
						<TitleBar title={title} onExit={props.exit} />
						{element}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
