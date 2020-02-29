import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Grid from "./Grid";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Grid />
    </Provider>
  )).toJSON();
}

describe("Grid", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Grid should be exported.
   */
  it("Should be truthy", () => {
    expect(Grid).toBeTruthy();
  });

  // TODO: Grid tests
});
