import styles from './GameMenu.module.css';
import Link from 'next/link';
import GameCard from '../../components/GamesPage/GameCard';
import _2048img from '../../public/img/2048.png';
import snakeimg from '../../public/img/snake.png';
import tenziesimg from '../../public/img/tenzies.png';

export default function GameMenu() {
	return (
		<section className={styles.gameMenu}>
			<h2>Current selection</h2>
			<div className={styles.menu}>
				<div>
					<Link href={'/games/2048'}>
						<GameCard
							className={styles.gameCard}
							title={'2048'}
							desc={'Play the classic tile game'}
							src={_2048img}
						/>
					</Link>
				</div>
				<div>
					<Link href={'/games/snake'}>
						<GameCard
							className={styles.gameCard}
							title={'snake'}
							desc={'Play this retro experience'}
							src={snakeimg}
						/>
					</Link>
				</div>
				<div>
					<Link href={'/games/tenzies'}>
						<GameCard
							className={styles.gameCard}
							title={'tenzies'}
							desc={'Have fun with this dice game'}
							src={tenziesimg}
						/>
					</Link>
				</div>
			</div>

			<Link href={'/games'}>
				<a className={styles.link}>Go to game page &rarr;</a>
			</Link>
		</section>
	);
}
