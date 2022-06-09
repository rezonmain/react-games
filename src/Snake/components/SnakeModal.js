import { useEffect, useRef, useState } from 'react';
import {
	drawSnake,
	moveSnake,
	newSnake,
	setUpBoard,
	updateBoard,
} from '../lib/snakeboard';
import useRaf from '../../hooks/useRaf';
import ControlsModal from './ControlsModal';
import { handleDirChange } from '../lib/utils';
import { useKey } from 'react-use';

export default function SnakeModal(props) {
	const [showModal, setShowModal] = useState(true);
	let snake = useRef();

	useEffect(() => {
		setUpBoard();
		snake.current = newSnake();
	}, []);

	useRaf(700, () => {
		snake.current = moveSnake(snake.current);
		updateBoard(snake.current);
	});

	const handleKeyDown = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key)) {
			snake.current.dir = handleDirChange(
				snake.current.dir,
				key.split('Arrow').pop()
			);
		}
	};

	useKey([], handleKeyDown);

	return (
		<aside
			id='modal-close'
			className='modal-bg'
			onClick={(e) => props.handleClose(e)}>
			<div className={`modal centered ${props.style}`}>
				<header>
					<svg
						id='modal-close'
						className='ui-icon'
						onClick={(e) => props.handleClose(e)}
						clipRule='evenodd'
						fillRule='evenodd'
						strokeLinejoin='round'
						strokeMiterlimit='2'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							id='modal-close'
							d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z'
						/>
					</svg>
				</header>
				<canvas
					id='snake-board'
					width={props.canvasSize.width}
					height={props.canvasSize.height}
				/>
				{/* {showModal && <ControlsModal count={count} />} */}
			</div>
		</aside>
	);
}
