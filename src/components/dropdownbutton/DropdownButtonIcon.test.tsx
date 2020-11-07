// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownButtonIcon from "./DropdownButtonIcon";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <DropdownButtonIcon />
//     </Provider>
//   )).toJSON();
// }

describe("DropdownButtonIcon", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownButtonIcon should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownButtonIcon).toBeTruthy();
  });

  // TODO: DropdownButtonIcon tests
});
