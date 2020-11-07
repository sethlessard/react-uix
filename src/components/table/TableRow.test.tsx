// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import TableRow from "./TableRow";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <TableRow />
//     </Provider>
//   )).toJSON();
// }

describe("TableRow", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * TableRow should be exported.
   */
  it("Should be truthy", () => {
    expect(TableRow).toBeTruthy();
  });

  // TODO: TableRow tests
});
