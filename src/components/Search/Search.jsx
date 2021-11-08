import React, { Component } from "react";
import SearchResult from "../SearchResult/SearchResult";
import PropTypes from "prop-types";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}

	changeHandler = (event) => {
		let value = event.target.value;
		this.setState({ value });
		this.props.performSearch(value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<h1>Guardian News Search App</h1>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.value} onChange={this.changeHandler} />
				</form>
				<div>
					<SearchResult articles={this.props.articles} />
				</div>
			</div>
		);
	}
}

Search.propTypes = {
	performSearch: PropTypes.func,
	articles: PropTypes.array,
};
export default Search;
