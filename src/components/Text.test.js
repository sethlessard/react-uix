import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Text from "./Text";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Text />
    </Provider>
  )).toJSON();
}

describe("Text", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Text should be exported.
   */
  it("Should be truthy", () => {
    expect(Text).toBeTruthy();
  });

  // TODO: Text tests
});
