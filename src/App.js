import React, { Component } from "react";
import fetchArticles from "./api/index";
import Search from "./components/Search/Search";
import "./App.css";
class App extends Component {
	state = {
		articles: [],
	};

	performSearch = (event) => {
		return fetchArticles(event).then((data) =>
			this.setState({ articles: data.response.results })
		);
	};

	render() {
		return (
			<div className="App">
				<Search
					articles={this.state.articles}
					performSearch={this.performSearch}
				/>
			</div>
		);
	}
}

export default App;
