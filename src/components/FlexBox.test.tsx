import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import FlexBox from "./FlexBox";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <FlexBox />
    </Provider>
  )).toJSON();
}

describe("FlexBox", () => {
  let defs = {
    ui: {}
  };
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * FlexBox should be exported
   */
  it("Should be truthy", () => {
    expect(FlexBox).toBeTruthy();
  });

  // TODO: FlexBox tests
});
