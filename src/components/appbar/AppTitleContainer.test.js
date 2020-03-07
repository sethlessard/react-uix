import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppTitleContainer from "./AppTitleContainer";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <AppTitleContainer />
    </Provider>
  )).toJSON();
}

describe("AppTitleContainer", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppTitleContainer should be exported.
   */
  it("Should be truthy", () => {
    expect(AppTitleContainer).toBeTruthy();
  });

  /**
   * margin-right should be set to "auto" so that the
   * title container is pushed to the left side of the screen.
   */
  it("Should have a margin-right of 'auto'", () => {
    expect(getTree(store)).toHaveStyleRule("margin-right", "auto");
  });

  /**
   * display should be set to "inline-flex" so that the title container
   * does not take up more horizontal space than necessary.
   */
  it("Should have a display of 'inline-flex'", () => {
    expect(getTree(store)).toHaveStyleRule("display", "inline-flex");
  });

  /**
   * align-items should be set to 'center' to vertically center the title
   * and any menu buttons.
   */
  it("align-items should be set to 'center'", () => {
    expect(getTree(store)).toHaveStyleRule("align-items", "center");
  });
});
