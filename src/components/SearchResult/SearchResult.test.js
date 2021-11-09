import React from "react";
import Enzyme, { shallow } from "enzyme";
import SearchResult from "./SearchResult";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockArticle = [
	{
		webUrl: "https://google.com",
		webTitle: "Google",
	},
];

describe("searchResult component", () => {
	test("renders", () => {
		const wrapper = shallow(<SearchResult articles={mockArticle} />);

		expect(wrapper).toMatchSnapshot();
	});

	test("return default empty array when no data to map through", () => {
		const wrapper = shallow(<SearchResult />);

		expect(wrapper).toMatchSnapshot();
	});

	test("Doesn't break when no article is passed", () => {
		const wrapper = shallow(<SearchResult />);

		expect(wrapper.find("li")).toHaveLength(0);
	});

	test("Doesn't break with empty array", () => {
		const wrapper = shallow(<SearchResult articles={[]} />);

		expect(wrapper.find("li")).toHaveLength(0);
	});
});
