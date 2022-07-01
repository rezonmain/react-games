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
	let el: JSX.Element;
	let title = 'Minesweeper';
	switch (props.type) {
		case 'beginner':
			el = <Board size={{ x: 9, y: 9 }} />;
			break;
		case 'intermediate':
			el = <Board size={{ x: 16, y: 16 }} />;
			break;
		case 'expert':
			el = <Board size={{ x: 16, y: 30 }} />;
			break;
		case 'custom':
			el = <Board size={props.boardSize} />;
			title += ' | Custom';
			break;
		case 'stats':
			el = <Stats />;
			title += ' stats';
			break;
		case 'options':
			el = <Options />;
			title += ' options';
			break;
	}
	return (
		<div className='modal-bg'>
			<div className='centered'>
				<Draggable handle='.handle'>
					<div className='windows-style-box'>
						<TitleBar title={title} onExit={props.exit} /> {el}
					</div>
				</Draggable>
			</div>
		</div>
	);
}
