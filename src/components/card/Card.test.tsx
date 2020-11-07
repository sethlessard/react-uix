// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Card from "./Card";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Card />
//     </Provider>
//   )).toJSON();
// }

describe("Card", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Card should be exported.
   */
  it("Should be truthy", () => {
    expect(Card).toBeTruthy();
  });

  // TODO: Card tests
});
