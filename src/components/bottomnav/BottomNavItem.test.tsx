import React from "react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import BottomNavItem from "./BottomNavItem";

const mockStore = configureStore([]);

const getTree = (store: MockStore) => {
  return renderer.create((
    <Provider store={store}>
      <BottomNavItem />
    </Provider>
  )).toJSON();
}

describe("BottomNavItem", () => {
  let defs = {
    ui: {
      theme: {
        colorPrimary: "#000",
        colorSecondary: "#fff",
        text: {
          colorOnDark: "#fff",
          colorOnLight: "#000"
        }
      }
    }
  };
  let store: MockStore;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * BottomNavItem should be exported.
   */
  it("Should be truthy", () => {
    expect(BottomNavItem).toBeTruthy();
  });

  /**
   * display should be set to "flex".
   */
  it("display should be set to 'flex'", () => {
    expect(getTree(store)).toHaveStyleRule("display", "flex");
  });

  /**
   * The Icon should be displayed on top of the text, so flex-direction should be
   * set to "column"
   */
  it("Should have a flex-direction of 'column'", () => {
    expect(getTree(store)).toHaveStyleRule("flex-direction", "column");
  });

  /**
   * align-items and justify-content should be set to "center" to horizonally
   * & vertically center the children.
   */
  it("Everything should be flex-centered", () => {
    expect(getTree(store)).toHaveStyleRule("align-items", "center");
    expect(getTree(store)).toHaveStyleRule("justify-content", "center");
  });

  /**
   * cursor should be set to "pointer"
   */
  it("The cursor should change to a pointer on hover", () => {
    expect(getTree(store)).toHaveStyleRule("cursor", "pointer");
  });

  /**
   * It should take on the color of theme.text.colorOnDark
   */
  it("Should take on the correct foreground color", () => {
    expect(getTree(store)).toHaveStyleRule("color", defs.ui.theme.text.colorOnDark);
  });
});
