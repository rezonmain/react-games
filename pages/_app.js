import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
// Global styles
import '../shared/style.css';

function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default App;
