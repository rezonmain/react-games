import { useEffect, useState } from 'react';
import SnakeModal from './components/SnakeModal';
import './snake.css';

const HEADER_OFFSET = 48;

export default function Snake() {
	const [modal, setModal] = useState(false);
	const [isWide, setIsWide] = useState(false);
	const [windowSize, setWindowSize] = useState();

	/* 	Determine which canvas size to show,
	this only runs once everytime modal changes 
  and not everytime the window changes,
  this is so when the canvas renders it stays
  the same size when resizing*/
	useEffect(() => {
		const query = '(min-width: 600px)';
		setIsWide(window.matchMedia(query).matches);
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight - HEADER_OFFSET,
		});
	}, [modal]);

	function handleCloseModal(e) {
		// Only close modal if element id is modal-close
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
