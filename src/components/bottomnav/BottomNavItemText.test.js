import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import BottomNavItemText from "./BottomNavItemText";

const mockStore = configureStore([]);

const getTree = (store, text) => {
  return renderer.create((
    <Provider store={store}>
      <BottomNavItemText>{ text }</BottomNavItemText>
    </Provider>
  )).toJSON();
}

describe("BottomNavItemText", () => {
  let defs = {
    ui: {
      theme: {
        colorPrimary: "#000",
        colorSecondary: "#fff",
        text: {
          colorOnDark: "#fff",
          colorOnLight: "#000"
        }
      }
    }
  };
  let store;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * BottomNavItemText should be exported.
   */
  it("Should be truthy", () => {
    expect(BottomNavItemText).toBeTruthy();
  });

  /**
   * It should contain the correct text when passed
   */
  it("Should contain the correct text", () => {
    expect(getTree(store, "Test").children[0].children[0]).toEqual("Test")
  });
});
