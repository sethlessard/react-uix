import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppTitle from "./AppTitle";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <AppTitle />
    </Provider>
  )).toJSON();
}

describe("AppTitle", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppTitle should be exported.
   */
  it("Should be truthy", () => {
    expect(AppTitle).toBeTruthy();
  });

  // TODO: AppTitle tests
});
