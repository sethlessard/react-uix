import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Paragraph from "./Paragraph";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Paragraph />
    </Provider>
  )).toJSON();
}

describe("Paragraph", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Paragraph should be exported.
   */
  it("Should be truthy", () => {
    expect(Paragraph).toBeTruthy();
  });

  // TODO: Paragraph tests
});
