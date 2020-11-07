// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import BottomNavigation from "./BottomNavigation";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <BottomNavigation />
//     </Provider>
//   )).toJSON();
// }

describe("BottomNavigation", () => {
  const defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * BottomNavigation should be exported.
   */
  it("Should be truthy", () => {
    expect(BottomNavigation).toBeTruthy();
  });

  // TODO: BottomNavigation tests
});
