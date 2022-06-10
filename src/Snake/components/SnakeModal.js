import { useEffect, useState, useRef } from 'react';
import { setUpBoard, updateBoard } from '../lib/board';
import ControlsModal from './ControlsModal';
import { useKey } from 'react-use';
import { newGame } from '../lib/game';
import { move, setDirection } from '../lib/snake';
import { useSwipeable } from 'react-swipeable';

export default function SnakeModal(props) {
	const [showModal, setShowModal] = useState(true);
	const [game, setGame] = useState();
	const allowInputRef = useRef(true);
	const intRef = useRef();

	// After first render
	useEffect(() => {
		const grid = setUpBoard();
		setGame(newGame(grid));
		intRef.current = setInterval(update, 100);
		return () => {
			clearInterval(intRef.current);
		};
	}, []);

	// After every render
	useEffect(() => {
		!showModal && updateBoard(game);
		console.log(game);
	});

	// Swipe controls
	const handlers = useSwipeable({
		onSwiped: (e) => {
			setGame((prev) => setDirection(prev, e.dir));
			setShowModal(false);
		},
	});

	// Keyboard controls
	const handleKeyDown = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (keys.includes(key) && allowInputRef.current) {
			setGame((prev) => setDirection(prev, key.split('Arrow').pop()));
			/* Prevent another input until board updates,
      also prevents snake hit when turning to fast */
			allowInputRef.current = false;
		}
		setShowModal(false);
	};

	// Callback triggered by the setInterval
	const update = () => {
		setGame((prev) => move(prev));
		// Allow input after update
		allowInputRef.current = true;
	};

	// Keyboard hook
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
					{...handlers}
					id='snake-board'
					width={props.canvasSize.width}
					height={props.canvasSize.height}
				/>
				{showModal && <ControlsModal />}
			</div>
		</aside>
	);
}
