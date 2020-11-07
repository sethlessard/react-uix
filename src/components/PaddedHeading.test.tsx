// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import PaddedHeading from "./PaddedHeading";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <PaddedHeading />
//     </Provider>
//   )).toJSON();
// }

describe("PaddedHeading", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * PaddedHeading should be exported.
   */
  it("Should be truthy", () => {
    expect(PaddedHeading).toBeTruthy();
  });

  // TODO:  PaddedHeading tests
});
