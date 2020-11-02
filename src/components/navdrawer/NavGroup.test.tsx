import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import NavGroup from "./NavGroup";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <NavGroup />
    </Provider>
  )).toJSON();
}

describe("NavGroup", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavGroup should be exported.
   */
  it("Should be truthy", () => {
    expect(NavGroup).toBeTruthy();
  });

  // TODO: NavGroup tests
});
