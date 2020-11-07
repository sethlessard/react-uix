// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import RadioGroup from "./RadioGroup";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <RadioGroup />
//     </Provider>
//   )).toJSON();
// }

describe("RadioGroup", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * RadioGroup should be exported.
   */
  it("Should be truthy", () => {
    expect(RadioGroup).toBeTruthy();
  });

  // TODO: RadioGroup tests
});
