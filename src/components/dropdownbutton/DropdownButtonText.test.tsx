// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownButtonText from "./DropdownButtonText";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <DropdownButtonText />
//     </Provider>
//   )).toJSON();
// }

describe("DropdownButtonText", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownButtonText should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownButtonText).toBeTruthy();
  });

  // TODO: DropdownButtonText tests
});
