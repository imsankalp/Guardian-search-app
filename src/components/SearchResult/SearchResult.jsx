import React from "react";
import PropTypes from "prop-types";
const SearchResult = ({ articles = [] }) => {
	return (
		<ul>
			{articles.map(({ webUrl, webTitle }) => (
				<li key={webUrl}>
					<a href={webUrl} target="_blank" rel="noopener noreferrer">
						{webTitle}
					</a>
				</li>
			))}
		</ul>
	);
};
SearchResult.propTypes = {
	articles: PropTypes.array,
};

export default SearchResult;
