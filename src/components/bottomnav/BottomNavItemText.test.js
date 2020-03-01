import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import BottomNavItemText from "./BottomNavItemText";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <BottomNavItemText />
    </Provider>
  )).toJSON();
}

describe("BottomNavItemText", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * BottomNavItemText should be exported.
   */
  it("Should be truthy", () => {
    expect(BottomNavItemText).toBeTruthy();
  });

  // TODO: BottomNavItemText tests
});
