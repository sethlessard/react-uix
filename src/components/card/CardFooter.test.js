import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import CardFooter from "./CardFooter";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <CardFooter />
    </Provider>
  )).toJSON();
}

describe("CardFooter", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * CardFooter should be exported.
   */
  it("Should be truthy", () => {
    expect(CardFooter).toBeTruthy();
  });

  // TODO: CardFooter tests
});
