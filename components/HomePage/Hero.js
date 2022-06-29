import Image from 'next/image';
import herogif from '../../public/img/hero.gif';
import styles from './Hero.module.css';
export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroText}>
				<h1>
					Play <b className={styles.b}>react </b>
					implementations of simple games.
				</h1>
				<h4>Fully responsive: play on your phone too!</h4>
			</div>
			<div className={styles.heroImg}>
				<Image src={herogif} layout='responsive' />
			</div>
		</section>
	);
}
