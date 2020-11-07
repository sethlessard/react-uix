// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import ToolbarTitle from "./ToolbarTitle";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <ToolbarTitle />
//     </Provider>
//   )).toJSON();
// }

describe("ToolbarTitle", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * ToolbarTitle should be exported.
   */
  it("Should be truthy", () => {
    expect(ToolbarTitle).toBeTruthy();
  });

  // TODO: ToolbarTitle tests
});
