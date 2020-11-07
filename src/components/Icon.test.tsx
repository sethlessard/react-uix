// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import Icon from "./Icon";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <Icon />
//     </Provider>
//   )).toJSON();
// }

describe("Icon", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Icon should be exported
   */
  it("Should be truthy", () => {
    expect(Icon).toBeTruthy();
  });

  // TODO:  Icon tests
});
