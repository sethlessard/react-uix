import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import TableBody from "./TableBody";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <TableBody />
    </Provider>
  )).toJSON();
}

describe("TableBody", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * TableBody should be exported.
   */
  it("Should be truthy", () => {
    expect(TableBody).toBeTruthy();
  });

  // TODO: TableBody tests
});
