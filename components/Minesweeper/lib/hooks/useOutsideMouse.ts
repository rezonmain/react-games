import React, { useEffect } from 'react';

export default function useOutsideMouseUp(
	ref: React.MutableRefObject<HTMLDivElement>,
	handler: (e: React.MouseEvent<HTMLDivElement>) => void
) {
	useEffect(() => {
		const handleMouse = (e) => {
			ref.current && !ref.current.contains(e.target) && handler(e);
		};

		document.addEventListener('mousemove', handleMouse);
		return () => {
			document.removeEventListener('mousemove', handleMouse);
		};
	}, [ref]);
}
