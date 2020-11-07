// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import NavContent from "./NavContent";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <NavContent />
//     </Provider>
//   )).toJSON();
// }

describe("NavContent", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * NavContent should be exported.
   */
  it("Should be truthy", () => {
    expect(NavContent).toBeTruthy();
  });

  // TODO: NavContent tests
});
