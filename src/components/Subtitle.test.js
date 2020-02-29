import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Subtitle from "./Subtitle";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Subtitle />
    </Provider>
  )).toJSON();
}

describe("Subtitle", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Subtitle should be exported.
   */
  it("Should be truthy", () => {
    expect(Subtitle).toBeTruthy();
  });

  // TODO: Subtitle tests
});
