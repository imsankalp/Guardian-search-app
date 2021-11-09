import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Search from "./Search.jsx";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const mockArticle = [
	{
		webUrl: "https://google.com",
		webTitle: "Google",
	},
];

describe("Search Component", () => {
	test("renders", () => {
		const wrapper = shallow(<Search />);
		expect(wrapper.exists()).toBe(true);
	});

	test("user text is echoed", () => {
		const wrapper = shallow(<Search performSearch={() => {}} />);
		wrapper.find("input").simulate("change", {
			target: { value: "hello" },
		});
		expect(wrapper.find("input").props().value).toEqual("hello");
	});

	test("Cancel Event on form submit", () => {
		const wrapper = shallow(<Search />);
		let prevented = false;
		wrapper.find("form").simulate("submit", {
			preventDefault: () => {
				prevented = true;
			},
		});
		expect(prevented).toBe(true);
	});

	//Integration Test
	test("renders search results when the articles change", () => {
		const wrapper = mount(<Search articles={[]} performSearch={() => {}} />);
		wrapper.setProps({
			articles: mockArticle,
		});

		expect(wrapper.find("a").prop("href")).toEqual("https://google.com");
	});
});
