import './2048.css';
import Board from './components/Board';
export default function G2048() {
	return (
		<section className='_2048-section bordered section'>
			<h3 className='section-title'>2048</h3>
			<div className='_2048-container'>
				<header className='_2048-header'></header>
				<Board size={4} />
			</div>
		</section>
	);
}
