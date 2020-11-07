import React from "react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppTitle from "./AppTitle";

const mockStore = configureStore([]);

const getTree = (store: MockStore, title: string) => {
  return renderer.create((
    <Provider store={store}>
      <AppTitle>{title}</AppTitle>
    </Provider>
  )).toJSON();
}

describe("AppTitle", () => {
  let defs = {};
  let store: MockStore;
  beforeEach(() => {
    store = mockStore(defs);
  });

  /**
   * AppTitle should be exported.
   */
  it("Should be truthy", () => {
    expect(AppTitle).toBeTruthy();
  });

  /**
   * It should display the title supplied
   */
  it("Should contain the title", () => {
    const tree = getTree(store, "title");
    expect(tree!![0].children[0]).toEqual("title");
  });

  /**
   * The display should be set to "inline".
   * This will allow objects to be placed next to a title.
   */
  it("Should have a display of \"inline\"", () => {
    const tree = getTree(store, "title");
    expect(tree).toHaveStyleRule("display", "inline");
  });
});
