import React from "react";
import renderer from "react-test-renderer";
import { ErrorMsg } from "./Error";

test("UI - ErrorMsg:", () => {
  const tree = renderer.create(<ErrorMsg />).toJSON();
  expect(tree).toMatchSnapshot();
});
