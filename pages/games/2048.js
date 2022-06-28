import dynamic from 'next/dynamic';

import HowTo from '../../components/shared/HowTo';
export default function _2048Page() {
	/* Due to generating random numbers, component text change on refresh
  so if we ssr this component it throws a hydration error, so disable ssr for
  the tenzies component
   */
	const React2048 = dynamic(() => import('../../components/2048/2048'), {
		ssr: false,
	});
	return (
		<>
			<React2048 />
			<HowTo />
		</>
	);
}
