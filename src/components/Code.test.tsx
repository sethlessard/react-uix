import React from "react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Code from "./Code";

const mockStore = configureStore([]);

const getTree = (store: MockStore, code = "Code") => {
  return renderer.create((
    <Provider store={store}>
      <Code code={code} />
    </Provider>
  )).toJSON();
}

describe("Code", () => {
  let defs = {
    ui: {
      theme: {
        colorPrimary: "#000",
        colorSecondary: "#111",
        text: {
          colorOnLight: "#111",
          colorOnDark: "#fff"
        }
      }
    }
  }
  let store: MockStore;

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
  it("Should have the background color of #33495e", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("background-color", "#33495e");
  });

  /**
   * The foreground color of the Code should take on the theme.text.colorOnDark value.
   */
  it("Should have the foreground color of the set foreground color", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("color", defs.ui.theme.text.colorOnDark);
  });
});
