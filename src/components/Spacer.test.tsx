// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Spacer from "./Spacer";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Spacer />
//     </Provider>
//   )).toJSON();
// }

describe("Spacer", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Spacer should be exported.
   */
  it("Should be truthy", () => {
    expect(Spacer).toBeTruthy();
  });

  // TODO: Spacer tests
});
