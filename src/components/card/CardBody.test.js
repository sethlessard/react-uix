import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardBody from "./CardBody";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <CardBody />
    </Provider>
  )).toJSON();
}

describe("CardBody", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * CardBody should be exported.
   */
  it("Should be truthy", () => {
    expect(CardBody).toBeTruthy();
  });

  // TODO: CardBody tests
});
