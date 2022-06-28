import styles from '../snake.module.css';
export default function ControlsModal(props) {
	return (
		<aside style={{ padding: '1rem' }} className={styles.modal + ' centered'}>
			<h2>Swipe or use arrow keys to begin</h2>
		</aside>
	);
}
