export default function SnakeModal(props) {
	return (
		<div
			id='modal-close'
			className='modal-bg'
			onClick={(e) => props.handleClose(e)}>
			<main className='modal centered'>
				<h1>Hello im supposed to be the game</h1>
				<button id='modal-close' onClick={(e) => props.handleClose(e)}>
					Close Modal
				</button>
			</main>
		</div>
	);
}
