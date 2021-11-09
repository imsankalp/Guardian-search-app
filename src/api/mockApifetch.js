const range = (n) => [...Array(n).keys()];

const fetchArticles = () => {
	return Promise.resolve({
		response: {
			results: range(10).map((i) => ({
				webUrl: `https://abc${i}.com`,
				webTitle: `title${i}`,
			})),
		},
	});
};

export default fetchArticles;
