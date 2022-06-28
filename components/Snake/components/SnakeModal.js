import { useEffect, useState, useRef } from 'react';
import { setUpBoard, updateBoard } from '../lib/board';
import ControlsModal from './ControlsModal';
import { useKey } from 'react-use';
import { newGame } from '../lib/game';
import { move, setDirection } from '../lib/snake';
import { useSwipeable } from 'react-swipeable';
import styles from '../snake.module.css';
import { clear } from '@testing-library/user-event/dist/clear';

export default function SnakeModal(props) {
	const [showModal, setShowModal] = useState(true);
	const [game, setGame] = useState();
	const [allowInput, setAllowInput] = useState(false);
	const intRef = useRef();
	const timRef = useRef();

	// After first render
	useEffect(() => {
		const grid = setUpBoard();
		setGame(newGame(grid));
		setShowModal(true);
		intRef.current = setInterval(update, 100);
		// Disallow input for the first 800ms of being mounted
		timRef.current = setTimeout(handleTimeout, 800);
		return () => {
			clearInterval(intRef.current);
		};
	}, []);

	const handleTimeout = () => {
		setAllowInput(true);
		clearTimeout(timRef.current);
	};

	const reset = () => {
		const grid = setUpBoard();
		setGame(newGame(grid));
		setShowModal(true);
		intRef.current = setInterval(update, 100);
	};

	// After every render
	useEffect(() => {
		if (!showModal) {
			updateBoard(game);
			if (game.hit) {
				clearInterval(intRef.current);
				/* Disallow input for 800ms, this prevents 
        immediately restaring the game when dead */
				setAllowInput(false);
				timRef.current = setTimeout(handleTimeout, 800);
				reset();
			}
		}
	});

	// Swipe controls
	const handlers = useSwipeable({
		onSwiped: (e) => {
			onInput(e.dir);
		},
		preventScrollOnSwipe: true,
	});

	// Keyboard controls
	const handleKeyDown = ({ key }) => {
		const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		const dir = key.split('Arrow').pop();
		keys.includes(key) && onInput(dir);
	};

	const onInput = (dir) => {
		// First input
		if (allowInput) {
			if (showModal) {
				setGame((prev) => setDirection(prev, 'Down'));
				setShowModal(false);
			} else {
				setGame((prev) => setDirection(prev, dir));
			}
		}
	};

	// Callback triggered by the setInterval
	const update = () => {
		setGame((prev) => move(prev));
	};

	// Keyboard hook
	useKey([], handleKeyDown);
	console.log(allowInput);
	return (
		<aside
			id='modal-close'
			className={styles['modal-bg']}
			onClick={(e) => props.handleClose(e)}>
			<div className={styles.modal + ` centered ${props.style}`}>
				<header>
					<svg
						id='modal-close'
						className={styles['ui-icon']}
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
