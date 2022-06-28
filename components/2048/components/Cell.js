import styles from '../2048.module.css';
import { animated, useSpring } from '@react-spring/web';

export default function Cell(props) {
	const config = { mass: 2, tension: 2500, friction: 120, clamp: true };

	const animation = useSpring({
		config,
		to: { x: props.sX, y: props.sY },
		from: { x: 0, y: 0 },
		onRest: () => props.onDone(),
	});
	return (
		<animated.div
			style={{ ...animation, ...props.style }}
			className={styles['_2048-cell']}>
			<span className={styles['_2048-text'] + ' centered'}>{props.value}</span>
		</animated.div>
	);
}
