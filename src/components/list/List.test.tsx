// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import List from "./List";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <List />
//     </Provider>
//   )).toJSON();
// }

describe("List", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * List should be exported.
   */
  it("Should be truthy", () => {
    expect(List).toBeTruthy();
  });

  // TODO: List tests
});
