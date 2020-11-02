import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownListItemText from "./DropdownListItemText";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <DropdownListItemText />
    </Provider>
  )).toJSON();
}

describe("DropdownListItemText", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownListItemText should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownListItemText).toBeTruthy();
  });

  // TODO: DropdownListItemText tests
});
