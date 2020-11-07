// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import HeaderCell from "./HeaderCell";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <HeaderCell />
//     </Provider>
//   )).toJSON();
// }

describe("HeaderCell", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * HeaderCell should be exported.
   */
  it("Should be truthy", () => {
    expect(HeaderCell).toBeTruthy();
  });

  // TODO: HeaderCell tests
});
