// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import NavItemText from "./NavItemText";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <NavItemText />
//     </Provider>
//   )).toJSON();
// }

describe("NavItemText", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavItemText should be exported.
   */
  it("Should be truthy", () => {
    expect(NavItemText).toBeTruthy();
  });

  // TODO: NavItemText tests
});
