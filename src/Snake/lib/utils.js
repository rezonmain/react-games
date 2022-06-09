export function handleDirChange(prev, dir) {
	return dir === 'Left' && prev !== 'Right'
		? dir
		: dir === 'Right' && prev !== 'Left'
		? dir
		: dir === 'Up' && prev !== 'Down'
		? dir
		: dir === 'Down' && prev !== 'Up'
		? dir
		: dir === null
		? dir
		: prev;
}
