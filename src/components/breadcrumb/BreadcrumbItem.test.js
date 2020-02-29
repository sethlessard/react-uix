import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import BreadcrumbItem from "./BreadcrumbItem";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <BreadcrumbItem />
    </Provider>
  )).toJSON();
}

describe("BreadcrumbItem", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * BreadcrumbItem should be exported.
   */
  it("Should be truthy", () => {
    expect(BreadcrumbItem).toBeTruthy();
  });

  // TODO: BreadcrumbItem tests
});
