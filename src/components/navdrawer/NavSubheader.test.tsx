import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import NavSubheader from "./NavSubheader";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <NavSubheader />
    </Provider>
  )).toJSON();
}

describe("NavSubheader", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavSubheader should be exported.
   */
  it("Should be truthy", () => {
    expect(NavSubheader).toBeTruthy();
  });

  // TODO: NavSubheader tests
});
