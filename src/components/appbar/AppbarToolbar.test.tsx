import React from "react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppbarToolbar from "./AppbarToolbar";

const mockStore = configureStore([]);

const getTree = (store: MockStore) => {
  return renderer.create((
    <Provider store={store}>
      <AppbarToolbar />
    </Provider>
  )).toJSON();
}

describe("AppbarToolbar", () => {
  let defs = {};
  let store: MockStore;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppbarToolbar should be exported.
   */
  it("Should be truthy", () => {
    expect(AppbarToolbar).toBeTruthy();
  });

  /**
   * It should have a display of inline-flex so the component does not take
   * up more horizontal space than necessary.
   */
  it("Should have a display of 'inline-flex'", () => {
    expect(getTree(store)).toHaveStyleRule("display", "inline-flex");
  });
});
