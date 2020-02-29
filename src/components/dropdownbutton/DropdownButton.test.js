import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownButton from "./DropdownButton";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <DropdownButton />
    </Provider>
  )).toJSON();
}

describe("DropdownButton", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownButton should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownButton).toBeTruthy();
  });

  // TODO: DropdownButton tests
});
