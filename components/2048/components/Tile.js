import styles from '../2048.module.css';
export default function Tile(props) {
	return (
		<div id='2048-tile' className={styles['_2048-tile']}>
			{props.cell}
		</div>
	);
}
