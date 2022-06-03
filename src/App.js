import Header from './shared/Header';
import HowTo from './shared/HowTo';
import Tenzies from './Tenzies/Tenzies';
function App() {
	return (
		<div>
			<Header />
			<Tenzies />
			<HowTo
				text={
					'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.'
				}
			/>
		</div>
	);
}

export default App;
