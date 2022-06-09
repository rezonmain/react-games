import { useRef } from 'react';
import { useEffect } from 'react';
/**
 * @param {int} time time in ms
 *
 */
export default function useRaf(timeDelta, callback) {
	const reqRef = useRef();
	const timeRef = useRef();

	const loop = (time) => {
		timeRef.current = timeRef.current === undefined ? time : timeRef.current;
		const delta = time - timeRef.current;

		if (delta >= timeDelta) {
			callback();
			timeRef.current = time;
		}
		requestAnimationFrame(loop);
	};

	useEffect(() => {
		reqRef.current = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(reqRef.current);
	});
}
