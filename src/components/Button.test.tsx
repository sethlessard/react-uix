import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Button from "./Button";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <Button>Button</Button>
    </Provider>
  )).toJSON();
}

describe("Button", () => {
  let defs = {
    ui: {
      primaryColor: "#000000",
      secondaryColor: "#111111",
      foregroundColor: "#ffffff"
    }
  }
  let store;

  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * Button should be exported.
   */
  it("Should be truthy", () => {
    expect(Button).toBeTruthy();
  });

  // TODO: Button tests
});
