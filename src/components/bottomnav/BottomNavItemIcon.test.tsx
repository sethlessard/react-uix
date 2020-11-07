// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import BottomNavItemIcon from "./BottomNavItemIcon";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <BottomNavItemIcon />
//     </Provider>
//   )).toJSON();
// }

describe("BottomNavItemIcon", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * BottomNavItemIcon should be exported.
   */
  it("Should be truthy", () => {
    expect(BottomNavItemIcon).toBeTruthy();
  });
});
