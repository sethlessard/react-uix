import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppbarToggleButton from "./AppbarToggleButton";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <AppbarToggleButton />
    </Provider>
  )).toJSON();
}

describe("AppbarToggleButton", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppbarToggleButton should be exported.
   */
  it("Should be truthy", () => {
    expect(AppbarToggleButton).toBeTruthy();
  });

  // TODO: AppbarToggleButton tests
});
