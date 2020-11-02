import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownListItemIcon from "./DropdownListItemIcon";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <DropdownListItemIcon />
    </Provider>
  )).toJSON();
}

describe("DropdownListItemIcon", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownListItemIcon should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownListItemIcon).toBeTruthy();
  });

  // TODO: DropdownListItemIcon tests
});
