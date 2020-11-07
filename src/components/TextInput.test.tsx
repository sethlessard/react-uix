// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import TextInput from "./TextInput";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <TextInput />
//     </Provider>
//   )).toJSON();
// }

describe("TextInput", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * TextInput should be exported.
   */
  it("Should be truthy", () => {
    expect(TextInput).toBeTruthy();
  });

  // TODO: TextInput tests
});
