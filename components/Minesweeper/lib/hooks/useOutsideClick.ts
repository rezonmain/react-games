import React, { Dispatch, SetStateAction, useEffect } from 'react';

export default function useOutsideClick(
	ref: React.MutableRefObject<HTMLDivElement>,
	setter: Dispatch<SetStateAction<boolean>>
) {
	useEffect(() => {
		const handleClick = (e) => {
			ref.current && !ref.current.contains(e.target) && setter(false);
		};

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [ref]);
}
