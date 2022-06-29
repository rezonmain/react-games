import styles from './footer.module.css';
import { BsGithub, BsTwitter } from 'react-icons/bs';
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<section className={styles.about}>
				<h4>About</h4>
				<p>
					This is a project to learn react, and to challenge myself to create
					these simple games that I’ve wasted hundreds of hours on.
				</p>
			</section>
			<section className={styles.links}>
				<h5>Tell me what you think:</h5>
				<div className={styles.iconLinks}>
					<a href='https://github.com/rezonmain/react-games'>
						<BsGithub size='1.5rem' />
					</a>
					<a href='https://twitter.com/rezonmain'>
						<BsTwitter size='1.5rem' />
					</a>
				</div>
				<small>&copy; 2022 made by rezonmain</small>
			</section>
		</footer>
	);
}
