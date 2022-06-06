import { useState } from 'react';
import { useMedia, useWindowSize } from 'react-use';

import './snake.css';
import SnakeModal from './components/SnakeModal';
const HEADER_OFFSET = 48;

export default function Snake() {
	const isWide = useMedia('(min-width: 600px)');
	const windowSize = useWindowSize();
	const [modal, setModal] = useState(false);

	function handleCloseModal(e) {
		// Only close modal y element id is modal-close
		setModal(e.target.id === 'modal-close' ? false : true);
	}

	function handleShowModal() {
		setModal(true);
	}

	return (
		<section className='snake-section bordered section'>
			<h3 className='section-title'>snake</h3>
			<div className='snake-container'>
				{modal && (
					<SnakeModal
						handleClose={handleCloseModal}
						canvasSize={
							isWide
								? { width: 600, height: 600 - HEADER_OFFSET }
								: { ...windowSize, height: windowSize.height - HEADER_OFFSET }
						}
					/>
				)}
				<button onClick={handleShowModal}>Open Game</button>
			</div>
		</section>
	);
}
