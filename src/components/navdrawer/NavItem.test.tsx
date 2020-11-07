// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import NavItem from "./NavItem";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <NavItem />
//     </Provider>
//   )).toJSON();
// }

describe("NavItem", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavItem should be exported.
   */
  it("Should be truthy", () => {
    expect(NavItem).toBeTruthy();
  });

  // TODO: NavItem tests
});
