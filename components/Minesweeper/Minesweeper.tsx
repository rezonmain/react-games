import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import { Coordinates, MenuAction } from './lib/mstypes';

export default function Minesweeper(): JSX.Element {
	const [modal, setModal] = useState<JSX.Element | undefined>(undefined);

	const handleModalExit = () => {
		setModal(undefined);
	};

	const handleMenuButtonClick = (
		name: MenuAction,
		size?: Coordinates
	): void => {
		setModal(<Modal type={name} boardSize={size} exit={handleModalExit} />);
	};

	return (
		<section className='section'>
			<h3 className='section-title'>Minesweeper</h3>
			<Menu handleClick={handleMenuButtonClick} />
			{modal}
		</section>
	);
}
