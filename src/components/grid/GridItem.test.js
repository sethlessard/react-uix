import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import GridItem from "./GridItem";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <GridItem />
    </Provider>
  )).toJSON();
}

describe("GridItem", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * GridItem should be exported.
   */
  it("Should be truthy", () => {
    expect(GridItem).toBeTruthy();
  });

  // TODO: GridItem tests
});
