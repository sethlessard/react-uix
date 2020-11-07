// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import NavHeader from "./NavHeader";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <NavHeader />
//     </Provider>
//   )).toJSON();
// }

describe("NavHeader", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavHeader should be exported.
   */
  it("Should be truthy", () => {
    expect(NavHeader).toBeTruthy();
  });

  // TODO: NavHeader tests
});
