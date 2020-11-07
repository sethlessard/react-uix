// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import NavDrawer from "./NavDrawer";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <NavDrawer />
//     </Provider>
//   )).toJSON();
// }

describe("NavDrawer", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavDrawer should be exported.
   */
  it("Should be truthy", () => {
    expect(NavDrawer).toBeTruthy();
  });

  // TODO: NavDrawer tests
});
