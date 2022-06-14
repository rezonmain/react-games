const colors = {
	null: { color: 'inherit', backgroundColor: 'inherit' },
	2: { color: '#776e65', backgroundColor: '#eee4da' },
	4: { color: '#776e65', backgroundColor: '#eee1c9' },
	8: { color: '#f9f6f2', backgroundColor: '#f3b27a' },
	16: { color: '#f9f6f2', backgroundColor: '#f69664' },
	32: { color: '#f9f6f2', backgroundColor: '#f77c5f' },
	64: { color: '#f9f6f2', backgroundColor: '#f75f3b' },
	128: { color: '#f9f6f2', backgroundColor: '#edd073' },
	256: { color: '#f9f6f2', backgroundColor: '#edcc62' },
	512: { color: '#f9f6f2', backgroundColor: '#edc950' },
	1024: { color: '#f9f6f2', backgroundColor: '#ecc542' },
	2048: { color: '#f9f6f2', backgroundColor: '#eec22e' },
};

export function getColor(value) {
	return colors[value] || { color: '#f9f6f2', backgroundColor: '#3d3a33' };
}
