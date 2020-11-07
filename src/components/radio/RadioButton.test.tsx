// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import RadioButton from "./RadioButton";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <RadioButton />
//     </Provider>
//   )).toJSON();
// }

describe("RadioButton", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * RadioButton should be exported.
   */
  it("Should be truthy", () => {
    expect(RadioButton).toBeTruthy();
  });

  // TODO: RadioButton tests
});
