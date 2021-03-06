import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownButtonItem from "./DropdownButtonItem";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <DropdownButtonItem />
    </Provider>
  )).toJSON();
}

describe("DropdownButtonItem", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownButtonItem should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownButtonItem).toBeTruthy();
  });

  // TODO: DropdownButtonItem tests
});
