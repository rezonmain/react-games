import './2048.css';
import Board from './components/Board';
export default function React2048() {
	return (
		<section className='_2048-section bordered section'>
			<h3 className='section-title'>2048</h3>
			<Board />
		</section>
	);
}
