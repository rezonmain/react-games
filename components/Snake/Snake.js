import { useState } from 'react';
import SnakeModal from './components/SnakeModal';
import styles from './snake.module.css';

const HEADER_OFFSET = 48;

/* WARNING: Strict mode breaks game,
  this is only an issue in development 
  TODO: - Styling, 
        - better graphics, 
        - score keeping */

export default function Snake() {
	const [modal, setModal] = useState(false);
	const [isWide, setIsWide] = useState(false);
	const [windowSize, setWindowSize] = useState();

	function handleCloseModal(e) {
		// Only close modal if element id is modal-close
		setModal(e.target.id === 'modal-close' ? false : true);
	}

	function handleShowModal() {
		const query = '(min-width: 600px)';
		setIsWide(window.matchMedia(query).matches);
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight - HEADER_OFFSET,
		});
		setModal(true);
	}

	return (
		<section className={styles['snake-section'] + ' bordered section'}>
			<h3 className='section-title'>snake</h3>
			<div className={styles['snake-container']}>
				{modal && (
					<SnakeModal
						handleClose={handleCloseModal}
						canvasSize={
							isWide ? { width: 600, height: 600 - HEADER_OFFSET } : windowSize
						}
						style={isWide ? 'modal-wide' : 'modal-narrow'}
					/>
				)}
				<button onClick={handleShowModal}>Open Game</button>
			</div>
		</section>
	);
}
