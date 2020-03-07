import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Appbar from "./Appbar";
import { UPDATE_APPBAR_DEFINED, UPDATE_APPBAR_HEIGHT } from "../../redux/actions/ui";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Appbar />
    </Provider>
  )).toJSON();
}

describe("Appbar", () => {
  let defs = {
    ui: {
      theme: {
        colorPrimary: "#000",
        colorSecondary: "#fff",
        text: {
          colorOnDark: "#fff",
          colorOnLight: "#000"
        }
      },
      appbarDefined: false,
      appbarHeight: 0
    }
  }
  let store;

  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Appbar should be exported.
   */
  it("Should be truthy", () => {
    expect(Appbar).toBeTruthy();
  });

  /**
   * The Appbar should span the entire screen.
   */
  it("Should have a width of the entire screen", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("width", "100vw");
  });

  /**
   * The Appbar should use the primary color as its background color.
   */
  it("Should have the background color of the primary color", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("background-color", defs.ui.theme.colorPrimary);
  });

  /**
   * When the Appbar is defined, it should update the store.
   */
  it("It should update the store", () => {
    getTree(store);
    const expectedActions = [
      { type: UPDATE_APPBAR_DEFINED, appbarDefined: true },
      { type: UPDATE_APPBAR_HEIGHT, appbarHeight: 62 }
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
