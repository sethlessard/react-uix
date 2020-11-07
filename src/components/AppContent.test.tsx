import React from "react";
import configureStore, { MockStore } from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import "jest-styled-components";

import AppContent from "./AppContent";

const mockStore = configureStore([]);

const getTree = (store: MockStore) => {
  return renderer.create((
    <Provider store={store}>
      <AppContent />
    </Provider>
  )).toJSON();
}

describe("AppContent", () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      ui: {
        appbarDefined: false,
        appbarHeight: 0,
        bottomNavDefined: false,
        bottomNavHeight: 0
      }
    });
  });

  /**
   * Make sure AppContent is exported
   */
  it("Is truthy", () => {
    expect(AppContent).toBeTruthy();
  });

  /**
   * The AppContent should match the width of the device.
   */
  it("Should have a width of 100wv", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("width", "100vw");
  });

  /**
   * The z-index should be set to 0 so the Appbar (z-index = 2)
   * and NavDrawer (z-index = 1) are displayed over the content
   */
  it("Should have a z-index of 0", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("z-index", "0");
  });

  /**
   * The position should be fixed.
   */
  it("Should have a fixed position", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("position", "fixed");
  });

  /**
   * The height should be set to 100vh if there is no Appbar and BottomNav.
   */
  it("With no Appbar and BottomNav, the height should be 100vh", () => {
    const tree = getTree(store);
    expect(tree).toHaveStyleRule("height", "100vh");
  });

  /**
   * When an Appbar is defined, the AppContent should shrink
   * by the size of the Appbar.
   */
  it("With an Appbar defined, the height should be 100vh - (Appbar Height)", () => {
    const defs = {
      ui: {
        appbarDefined: true,
        appbarHeight: 62
      }
    };
    store = mockStore(defs);
    const tree = getTree(store);

    expect(tree).toHaveStyleRule("height", `calc(100vh - ${defs.ui.appbarHeight}px)`);
  });

  /**
   * When an Appbar & BottomNav components are described, the height
   * should shrink by the height of both components combined.
   */
  it("With Appbar & BottomNav defined, the height should be 100vh - (Appbar Height + BottomNav Height)", () => {
    const defs = {
      ui: {
        appbarDefined: true,
        appbarHeight: 62,
        bottomNavDefined: true,
        bottomNavHeight: 62
      }
    };
    store = mockStore(defs);
    const tree = getTree(store);

    expect(tree).toHaveStyleRule("height", `calc(100vh - ${defs.ui.appbarHeight + defs.ui.bottomNavHeight}px)`);
  });
});
