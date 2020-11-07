// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Image from "./Image";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Image />
//     </Provider>
//   )).toJSON();
// }

describe("Image", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Image should be exported.
   */
  it("Should be truthy", () => {
    expect(Image).toBeTruthy();
  });

  // TODO:  Image tests
});
