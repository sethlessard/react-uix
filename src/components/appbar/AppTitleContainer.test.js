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

  // TODO: AppTitleContainer tests
});
