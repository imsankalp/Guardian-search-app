const API_KEY = "1382dbef-9174-471d-bc78-3f2b72f13525";

const fetchArticles = (event) => {
	return fetch(
		`https://content.guardianapis.com/search?q=${event}&api-key=${API_KEY}`
	).then((res) => {
		return res.json();
	});
};

export default fetchArticles;
