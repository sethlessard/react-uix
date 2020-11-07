// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Column from "./Column";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Column />
//     </Provider>
//   )).toJSON();
// }

describe("Column", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Column should be exported.
   */
  it("Should be truthy", () => {
    expect(Column).toBeTruthy();
  });

  // TODO: Column tests
});
