import React from "react";
import { shallow, mount, render } from "enzyme";
import "mock-local-storage";
import App from "./App";
import { Header } from "./ui/Header";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render a <header />", () => {
    expect(wrapper.find("header").length).toEqual(1);
  });

  it("should render the Header Component", () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
