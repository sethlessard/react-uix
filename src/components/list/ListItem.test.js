import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ListItem from "./ListItem";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <ListItem />
    </Provider>
  )).toJSON();
}

describe("ListItem", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * ListItem should be exported.
   */
  it("Should be truthy", () => {
    expect(ListItem).toBeTruthy();
  });

  // TODO: ListItem tests
});
