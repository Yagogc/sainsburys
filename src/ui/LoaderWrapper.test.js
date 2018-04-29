import React from "react";
import renderer from "react-test-renderer";
import { LoaderWrapper } from "./LoaderWrapper";

test("UI - LoaderWrapper:", () => {
  const tree = renderer.create(<LoaderWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
