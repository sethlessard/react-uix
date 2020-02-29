import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Toast from "./Toast";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Toast />
    </Provider>
  )).toJSON();
}

describe("Toast", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Toast should be exported.
   */
  it("Should be truthy", () => {
    expect(Toast).toBeTruthy();
  });

  // TODO: Toast tests
});
