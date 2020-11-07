// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Page from "./Page";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Page />
//     </Provider>
//   )).toJSON();
// }

describe("Page", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Page should be exported.
   */
  it("Should be truthy", () => {
    expect(Page).toBeTruthy();
  });

  // TODO:  Page tests
});
