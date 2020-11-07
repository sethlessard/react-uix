// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import CardHeader from "./CardHeader";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <CardHeader />
//     </Provider>
//   )).toJSON();
// }

describe("CardHeader", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * CardHeader should be exported.
   */
  it("Should be truthy", () => {
    expect(CardHeader).toBeTruthy();
  });

  // TODO: CardHeader
});
