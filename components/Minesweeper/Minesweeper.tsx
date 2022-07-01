import { useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import Options from './components/Options';
import Stats from './components/Stats';
import { Coordinates, MenuAction } from './lib/mstypes';

export default function Minesweeper(): JSX.Element {
	const [modal, setModal] = useState<JSX.Element | undefined>(undefined);

	const handleModalExit = () => {
		setModal(undefined);
	};

	const handleMenuAction = (action: MenuAction, size?: Coordinates): void => {
		switch (action) {
			case 'initBoard':
				console.log(size);
				break;
			case 'openOptions':
				setModal(
					<Modal
						as={<Options />}
						title='Minesweeper | Options'
						onExit={handleModalExit}
					/>
				);
				break;
			case 'openStats':
				setModal(
					<Modal
						as={<Stats />}
						title='Minesweeper | Stats'
						onExit={handleModalExit}
					/>
				);
				break;
		}
	};

	return (
		<section className='section'>
			<h3 className='section-title'>Minesweeper</h3>
			<Menu handleClick={handleMenuAction} />
			{modal}
		</section>
	);
}
