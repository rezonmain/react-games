import styles from '../snake.module.css';
export default function ControlsModal(props) {
	return (
		<aside
			style={{ padding: '1rem', color: 'white', textAlign: 'center' }}
			className={styles.modal + ' centered'}>
			{props.score && props.score !== 0 ? <h2>Score: {props.score}</h2> : null}
			<p style={{ fontSize: '1.2rem' }}>Swipe or use arrow keys to continue</p>
		</aside>
	);
}
