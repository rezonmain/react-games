import { useState } from 'react';
import { useKey } from 'react-use';
import { newTiles, displayTileElements, moveTiles } from '../lib/tiles';

export default function Board(props) {
	const [tiles, setTiles] = useState(() => newTiles(props.size));
	const [game, setGame] = useState();

	const boardStyle = {
		gridTemplateColumns: `repeat(${props.size}, 1fr)`,
	};

	const handleKeyPress = ({ key }) => {
		setTiles((pre) => moveTiles(pre, key));
	};

	useKey([], handleKeyPress);

	return (
		<article>
			<header className='_2048-header'>
				<p>Score:</p>
			</header>
			<div style={boardStyle} className='_2048-board-container'>
				{displayTileElements(tiles)}
			</div>
		</article>
	);
}
