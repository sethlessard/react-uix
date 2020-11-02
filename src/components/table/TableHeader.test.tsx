import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import TableHeader from "./TableHeader";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <TableHeader />
    </Provider>
  )).toJSON();
}

describe("TableHeader", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * TableHeader should be exported.
   */
  it("Should be truthy", () => {
    expect(TableHeader).toBeTruthy();
  });

  // TODO: TableHeader tests
});
