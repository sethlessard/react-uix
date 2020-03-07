import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ScrollToTop from "./ScrollToTop";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <ScrollToTop />
    </Provider>
  )).toJSON();
}

describe("ScrollToTop", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * ScrollToTop should be exported.
   */
  it("Should be truthy", () => {
    expect(ScrollToTop).toBeTruthy();
  });

  // TODO: ScrollToTop tests
});
