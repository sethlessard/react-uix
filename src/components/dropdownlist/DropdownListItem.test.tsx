// import React from "react";
import configureStore from "redux-mock-store";
// import { Provider } from "react-redux";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import DropdownListItem from "./DropdownListItem";

const mockStore = configureStore([]);

// const getTree = (store) => {
//   return renderer.create((
//     <Provider store={store}>
//       <DropdownListItem />
//     </Provider>
//   )).toJSON();
// }

describe("DropdownListItem", () => {
  let defs = {};
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * DropdownListItem should be exported.
   */
  it("Should be truthy", () => {
    expect(DropdownListItem).toBeTruthy();
  });

  // TODO: DropdownListItem tests
});
