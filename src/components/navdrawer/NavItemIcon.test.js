import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import NavItemIcon from "./NavItemIcon";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <NavItemIcon />
    </Provider>
  )).toJSON();
}

describe("NavItemIcon", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavItemIcon should be exported.
   */
  it("Should be truthy", () => {
    expect(NavItemIcon).toBeTruthy();
  });

  // TODO: NavItemIcon tests
});
