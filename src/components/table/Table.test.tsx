// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Table from "./Table";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Table />
//     </Provider>
//   )).toJSON();
// }

describe("Table", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Table should be exported.
   */
  it("Should be truthy", () => {
    expect(Table).toBeTruthy();
  });

  // TODO: Table tests
});
