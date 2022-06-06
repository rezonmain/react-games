import { useState } from 'react';
import './snake.css';
import SnakeModal from './components/SnakeModal';

export default function Snake() {
	// const [game, setGame] = useState(false);
	const [modal, setModal] = useState(false);

	function handleCloseModal(e) {
		setModal(e.target.id === 'modal-close' ? false : true);
	}

	function handleShowModal() {
		setModal(true);
	}

	return (
		<section className='snake-section bordered section'>
			<h3 className='section-title'>snake</h3>
			<div className='snake-container'>
				{modal && <SnakeModal handleClose={handleCloseModal} />}
				<button onClick={handleShowModal}>Open Game</button>
			</div>
		</section>
	);
}
