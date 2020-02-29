import React from "react";
import App from "./App";
import { shallow } from "../enzyme";
import renderer from "react-test-renderer";
import "jest-styled-components";

const getTree = () => {
  return renderer.create(<App />).toJSON();
}

describe("App", () => {
  it("Is truthy", () => {
    expect(App).toBeTruthy();
  });

  it("Should render shallow", () => {
    const component = shallow(<App />);
    expect(component.isEmptyRender()).toBeFalsy();
  });

  it("Should have a width of 100vw", () => {
    const tree = getTree();
    expect(tree).toHaveStyleRule("width", "100vw");
  });

  it("Should have a height of 100vh", () => {
    const tree = getTree();
    expect(tree).toHaveStyleRule("height", "100vh");
  });
});
