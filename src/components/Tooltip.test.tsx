// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Tooltip from "./Tooltip";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Tooltip />
//     </Provider>
//   )).toJSON();
// }

describe("Tooltip", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Tooltip should be exported.
   */
  it("Should be truthy", () => {
    expect(Tooltip).toBeTruthy();
  });

  // TODO: Toooltip tests
});
