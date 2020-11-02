import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Heading from "./Heading";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Heading />
    </Provider>
  )).toJSON();
};

describe("Heading", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Heading should be exported
   */
  it("Should be truthy", () => {
    expect(Heading).toBeTruthy();
  });

  // TODO:  Heading tests
});
