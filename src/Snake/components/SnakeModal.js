import { useMedia } from 'react-use';

export default function SnakeModal(props) {
	return (
		<aside
			id='modal-close'
			className='modal-bg'
			onClick={(e) => props.handleClose(e)}>
			<div className='modal'>
				<div className='centered'>
					<h1>Hello im supposed to be the game</h1>
					<button id='modal-close' onClick={(e) => props.handleClose(e)}>
						Close Modal
					</button>
				</div>
			</div>
		</aside>
	);
}
