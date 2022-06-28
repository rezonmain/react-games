import Snake from '../../components/Snake/Snake';
import HowTo from '../../components/shared/HowTo';
export default function _2048Page() {
	return (
		<>
			<Snake />
			<HowTo text='Swipe or use arrow keys to control snake, eat the fruit without hitting the walls or running into yourself.' />
		</>
	);
}
