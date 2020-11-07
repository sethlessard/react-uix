// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Checkbox from "./Checkbox";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Checkbox />
//     </Provider>
//   )).toJSON();
// }

describe("Checkbox", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Checkbox should be exported.
   */
  it("Should be truthy", () => {
    expect(Checkbox).toBeTruthy();
  });

  // TODO: Checkbox tests
});
