import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";
// TODO: enyzme tests for button clicks

import AppbarToggleButton from "./AppbarToggleButton";

const mockStore = configureStore([]);

const getTree = (store) => {
  return renderer.create((
    <Provider store={store}>
      <AppbarToggleButton />
    </Provider>
  )).toJSON();
}

describe("AppbarToggleButton", () => {
  let defs = {
    ui: {
      theme: {
        colorPrimary: "#000",
        colorSecondary: "#111",
        text: {
          colorOnLight: "#111",
          colorOnDark: "#fff"
        }
      }
    }
  };
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppbarToggleButton should be exported.
   */
  it("Should be truthy", () => {
    expect(AppbarToggleButton).toBeTruthy();
  });

  /**
   * It should make the cursor change to a pointer on hover.
   */
  it("cursor should be set to 'pointer'", () => {
    expect(getTree(store)).toHaveStyleRule("cursor", "pointer");
  });
  // TODO: AppbarToggleButton tests
});
