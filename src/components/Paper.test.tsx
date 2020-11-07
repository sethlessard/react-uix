// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Paper from "./Paper";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Paper />
//     </Provider>
//   )).toJSON();
// }

describe("Paper", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Paper should be exported.
   */
  it("Should be truthy", () => {
    expect(Paper).toBeTruthy();
  });

  // TODO: Paper tests
});
