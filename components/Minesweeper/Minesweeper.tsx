import { useReducer, useState } from 'react';
import Menu from './components/Menu/Menu';
import Modal from './components/Modal/Modal';
import Options from './components/Options';
import Stats from './components/Stats';
import { newGame } from './lib/init';
import { Coordinates, Game, MenuAction } from './lib/mstypes';
import gameReducer from './lib/reducer';

export default function Minesweeper(): JSX.Element {
	const [modal, setModal] = useState<JSX.Element | undefined>(undefined);
	const [game, dispatch] = useReducer(gameReducer, undefined);

	const handleModalExit = () => {
		setModal(undefined);
	};

	const handleMenuAction = (
		action: MenuAction,
		size?: Coordinates,
		diff?: string
	): void => {
		switch (action) {
			case 'initGame':
				console.log(size, diff);
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
