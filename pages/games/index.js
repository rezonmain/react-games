import Link from 'next/link';
import GameCard from '../../components/GamesPage/GameCard';
import _2048img from '../../public/img/2048.png';
import snakeimg from '../../public/img/snake.png';
import tenziesimg from '../../public/img/tenzies.png';

export default function Games() {
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		marginBottom: '2rem',
	};

	return (
		<div style={styles}>
			<div>
				<Link href={'/games/2048'}>
					<GameCard
						title={'2048'}
						desc={'Play the classic tile game'}
						src={_2048img}
					/>
				</Link>
			</div>

			<div>
				<Link href={'/games/snake'}>
					<GameCard
						title={'snake'}
						desc={'Play this retro experience'}
						src={snakeimg}
					/>
				</Link>
			</div>
			<div>
				<Link href={'/games/tenzies'}>
					<GameCard
						title={'tenzies'}
						desc={'Have fun with this dice game'}
						src={tenziesimg}
					/>
				</Link>
			</div>
		</div>
	);
}
