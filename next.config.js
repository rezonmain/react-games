module.exports = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/games',
				permanent: true,
			},
		];
	},
};
