import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ToolbarOptionContainer from "./ToolbarOptionContainer";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <ToolbarOptionContainer />
    </Provider>
  )).toJSON();
}

describe("ToolbarOptionContainer", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * ToolbarOptionContainer should be exported.
   */
  it("Should be truthy", () => {
    expect(ToolbarOptionContainer).toBeTruthy();
  });

  // TODO: ToolbarOptionContainer tests
});
