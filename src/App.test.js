import React from "react";
import { shallow } from "enzyme";
import "mock-local-storage";
import App from "./App";
import { Header } from "./ui/Header";

describe("App", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
