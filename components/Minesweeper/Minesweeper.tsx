import { useReducer, useState } from 'react';
import Menu from './components/Menu/Menu';
import { getModalFromAction } from './lib/menu';
import { MenuAction } from './lib/mstypes';
import gameReducer from './lib/reducer';

export default function Minesweeper() {
	const [modal, setModal] = useState<JSX.Element | undefined>(undefined);
	const [game, dispatch] = useReducer(gameReducer, undefined);

	const handleModalExit = () => {
		setModal(undefined);
	};

	const handleMenuAction = (action: MenuAction) => {
		setModal(getModalFromAction(action, dispatch, handleModalExit));
	};

	return (
		<section className='section'>
			<h3 className='section-title'>Minesweeper</h3>
			<Menu handleClick={handleMenuAction} />
			{modal}
		</section>
	);
}
