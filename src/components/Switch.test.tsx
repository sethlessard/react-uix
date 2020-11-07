// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Switch from "./Switch";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Switch />
//     </Provider>
//   )).toJSON();
// }

describe("Switch", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Switch should be exported.
   */
  it("Should be truthy", () => {
    expect(Switch).toBeTruthy();
  });

  // TODO: Switch tests
});
