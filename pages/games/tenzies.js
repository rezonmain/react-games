import dynamic from 'next/dynamic';
import HowTo from '../../components/shared/HowTo';
export default function TenziesPage() {
	/* Due to generating random numbers, component text change on refresh
  so if we ssr this component it throws a hydration error, so disable ssr for
  the tenzies component
   */
	const Tenzies = dynamic(() => import('../../components/Tenzies/Tenzies'), {
		ssr: false,
	});
	return (
		<>
			<Tenzies />
			<HowTo text='Roll until all dice are the same. Click each die to freeze it at its current value between rolls.' />
		</>
	);
}
