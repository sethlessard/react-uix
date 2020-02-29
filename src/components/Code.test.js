import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Code from "./Code";

const mockStore = configureStore([]);

const getTree = (store, code = "Code") => {
  return renderer.create((
    <Provider store={store}>
      <Code text={code} />
    </Provider>
  )).toJSON();
}

describe("Code", () => {
  let defs = {
    ui: {
      primaryColor: "#000000",
      secondaryColor: "#111111",
      foregroundColor: "#ffffff"
    }
  }
  let store;

  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Code should be exported
   */
  it("Should be truthy", () => {
    expect(Code).toBeTruthy();
  });

  /**
   * Should take on the primary color as the background color.
   */
  it("Should have the background color of the primary color", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("background-color", defs.ui.primaryColor);
  });

  /**
   * The foreground color of the Code should take on the set ui foregroundColor.
   */
  it("Should have the foreground color of the set foreground color", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("color", defs.ui.foregroundColor);
  });
});
