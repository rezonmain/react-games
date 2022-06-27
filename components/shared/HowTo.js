export default function HowTo(props) {
	return (
		<section className='bordered section'>
			<h3 className='section-title'>How to play</h3>
			<p className='instruction-text'>
				{props.text || 'Pass instruction text through props.text'}
			</p>
		</section>
	);
}
