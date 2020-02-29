import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppbarToolbar from "./AppbarToolbar";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <AppbarToolbar />
    </Provider>
  )).toJSON();
}

describe("AppbarToolbar", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppbarToolbar should be exported.
   */
  it("Should be truthy", () => {
    expect(AppbarToolbar).toBeTruthy();
  });

  // TODO: AppbarToolbar tests
});
