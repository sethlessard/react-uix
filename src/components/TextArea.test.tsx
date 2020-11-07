// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import TextArea from "./TextArea";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <TextArea />
//     </Provider>
//   )).toJSON();
// }

describe("TextArea", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * TextArea should be exported.
   */
  it("Should be truthy", () => {
    expect(TextArea).toBeTruthy();
  });

  // TODO: TextArea
});
