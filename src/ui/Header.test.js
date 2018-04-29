import React from "react";
import renderer from "react-test-renderer";
import { Header, HeaderTitle } from "./Header";

test("UI - Header:", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("UI - HeaderTitle:", () => {
  const tree = renderer.create(<HeaderTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
