import Header from './shared/Header';
import HowTo from './shared/HowTo';
import React2048 from './2048/2048';
function App() {
	return (
		<>
			<Header />
			<main>
				<React2048 />
				<HowTo />
			</main>
		</>
	);
}

export default App;
