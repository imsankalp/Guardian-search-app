import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";
import Search from "./components/Search/Search";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import mount from "enzyme/build/mount";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./api/mockApifetch.js");

describe("Main App component", () => {
	test("renders", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.exists()).toBe(true);
	});

	test("should render Search Component", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.children(Search).length).toEqual(1);
	});

	test("should update article state", () => {
		const wrapper = mount(<App />);

		expect(wrapper.state().articles).toEqual([]);

		const { performSearch } = wrapper.find(Search).props();

		return performSearch().then(() => {
			expect(wrapper.state().articles).toHaveLength(10);
		});
	});
});
