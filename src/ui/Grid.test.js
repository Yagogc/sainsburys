import React from "react";
import renderer from "react-test-renderer";
import { GridContainer, GridItem } from "./Grid";

test("UI - GridContainer:", () => {
  const tree = renderer.create(<GridContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("UI - GridItem:", () => {
  const tree = renderer.create(<GridItem />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("border-color", "#8897a2");
  expect(tree).toHaveStyleRule("border-style", "solid");
});

test("UI - GridItem isSelected:", () => {
  const tree = renderer.create(<GridItem isSelected />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("border-color", "red");
  expect(tree).toHaveStyleRule("border-style", "dotted");
});
