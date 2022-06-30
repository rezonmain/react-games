import Minesweeper from '../../components/Minesweeper/Minesweeper';
import HowTo from '../../components/shared/HowTo';
export default function MinesweeperPage(): JSX.Element {
	return (
		<>
			<Minesweeper />;
			<HowTo text='Click to tiles to reveal them, tile value indicates number of adjacent mines. Revealing a tile with a mine ends the game.' />
		</>
	);
}
