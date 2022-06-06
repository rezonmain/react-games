import { useEffect, useState } from 'react';
import { setUpCanvas, newGame, updateCanvas, drawCanvas } from '../lib/utils';

export default function SnakeModal(props) {
	const [start, setStart] = useState(false);
	const [game, setGame] = useState(newGame());

	useEffect(() => {
		setUpCanvas();
	}, [props.canvasSize]);

	useEffect(() => {
		const intervalId = setInterval(handleUpdate, 100);
		return () => clearInterval(intervalId);
	});

	function handleUpdate() {
		updateCanvas(setGame);
		drawCanvas(game);
	}

	console.log(game);
	return (
		<aside
			id='modal-close'
			className='modal-bg'
			onClick={(e) => props.handleClose(e)}>
			<div className='modal centered'>
				<header>
					<svg
						id='modal-close'
						onClick={(e) => props.handleClose(e)}
						className='ui-icon'
						clipRule='evenodd'
						fillRule='evenodd'
						strokeLinejoin='round'
						strokeMiterlimit='2'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
					</svg>
				</header>
				<canvas
					id='snake-board'
					width={props.canvasSize.width}
					height={props.canvasSize.height}
				/>
			</div>
		</aside>
	);
}
