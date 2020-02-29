import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import TableData from "./TableData";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <TableData />
    </Provider>
  )).toJSON();
}

describe("TableData", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * TableData should be exported.
   */
  it("Should be truthy", () => {
    expect(TableData).toBeTruthy();
  });

  // TODO: TableData tests
});
