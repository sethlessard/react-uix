import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Breadcrumb from "./Breadcrumb";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Breadcrumb />
    </Provider>
  )).toJSON();
}

describe("Breadcrumb", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Breadcrumb should be exported.
   */
  it("Should be truthy", () => {
    expect(Breadcrumb).toBeTruthy();
  });

  // TODO: Breadcrumb tests
});
