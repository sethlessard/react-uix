// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import ColorPicker from "./ColorPicker";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <ColorPicker />
//     </Provider>
//   )).toJSON();
// }

describe("ColorPicker", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * ColorPicker should be exported
   */
  it("Should be truthy", () => {
    expect(ColorPicker).toBeTruthy();
  });

  // TODO:  ColorPicker tests
});
