import { Action } from "redux";
import { UITheme } from "../reducers/ui";

export const UPDATE_THEME = "UPDATE_THEME";
export const UPDATE_APPBAR_DEFINED = "UPDATE_APPBAR_DEFINED";
export const UPDATE_APPBAR_HEIGHT = "UPDATE_APPBAR_HEIGHT";
export const UPDATE_APPCONTENT_SCROLLABLE_COMPONENT = "UPDATE_APPCONTENT_SCROLLABLE_COMPONENT";
export const UPDATE_BOTTOMNAV_DEFINED = "UPDATE_BOTTOMNAV_DEFINED";
export const UPDATE_BOTTOMNAV_HEIGHT = "UPDATE_BOTTOMNAV_HEIGHT";
export const UPDATE_NAVDRAWER_DEFINED = "UPDATE_NAVDRAWER_DEFINED";
export const UPDATE_NAVDRAWER_OPEN = "UPDATE_NAVDRAWER_OPEN";
export const UPDATE_NAVDRAWER_WIDTH = "UPDATE_NAVDRAWER_WIDTH";
export const UPDATE_WINDOW_HEIGHT = "UPDATE_WINDOW_HEIGHT";
export const UPDATE_WINDOW_WIDTH = "UPDATE_WINDOW_WIDTH";

export interface UIAction extends Action<string> {
  appbarDefined?: boolean,
  appbarHeight?: number,
  appContentScrollableComponent?: React.Ref<HTMLDivElement>,
  bottomNavDefined?: boolean,
  bottomNavHeight?: number,
  navDrawerDefined?: boolean,
  navDrawerOpen?: boolean,
  navDrawerWidth?: number,
  theme?: UITheme,
  windowHeight?: number,
  windowWidth?: number
};

/**
 * Toggle to the navigation drawer open/closed.
 */
export const toggleNavigationDrawer = () => {
  // @ts-ignore
  return (dispatch, getState) => {
    const { navDrawerOpen } = getState().ui;
    dispatch(updateNavDrawerOpen(!navDrawerOpen));
  }
}

/**
 * Update whether or not an appbar is used by the ui.
 * @param appbarDefined whether or not the appbar is defined.
 */
export const updateAppbarDefined = (appbarDefined: boolean = false): UIAction => ({
  type: UPDATE_APPBAR_DEFINED,
  appbarDefined
});

/**
 * Update the height of the appbar.
 * @param appbarHeight the height of the appbar.
 */
export const updateAppbarHeight = (appbarHeight: number = 0): UIAction => ({
  type: UPDATE_APPBAR_HEIGHT,
  appbarHeight
});

/**
 * The AppContent scrollable component.
 * @param appContentScrollableComponent the scrollable component
 */
export const updateAppContentScrollableComponent = (appContentScrollableComponent: React.Ref<HTMLDivElement>): UIAction => ({
  type: UPDATE_APPCONTENT_SCROLLABLE_COMPONENT,
  appContentScrollableComponent
});

/**
 * Update whether or not the ui uses a bottom nav.
 * @param bottomNavDefined whether or not the bottom nav is defined.
 */
export const updateBottomNavDefined = (bottomNavDefined: boolean = false): UIAction => ({
  type: UPDATE_BOTTOMNAV_DEFINED,
  bottomNavDefined
});

/**
 * Update the height of the bottom nav.
 * @param bottomNavHeight the height of the bottom nav.
 */
export const updateBottomNavHeight = (bottomNavHeight: number = 0): UIAction => ({
  type: UPDATE_BOTTOMNAV_HEIGHT,
  bottomNavHeight
});

/**
 * Update whether or not the ui uses a nav drawer.
 * @param navDrawerDefined whether or not the nav drawer is defined.
 * @returns {{ type: string, navDrawerDefined: boolean }}
 */
export const updateNavDrawerDefined = (navDrawerDefined: boolean = false): UIAction => ({
  type: UPDATE_NAVDRAWER_DEFINED,
  navDrawerDefined
});

/**
 * Update whether or not the nav drawer is open.
 * @param navDrawerOpen whether or not the nav drawer is open.
 */
export const updateNavDrawerOpen = (navDrawerOpen: boolean = false): UIAction => ({
  type: UPDATE_NAVDRAWER_OPEN,
  navDrawerOpen
});

/**
 * Update the navigation drawer width.
 * @param navDrawerWidth the width of the nav drawer.
 */
export const updateNavDrawerWidth = (navDrawerWidth: number = 0): UIAction => ({
  type: UPDATE_NAVDRAWER_WIDTH,
  navDrawerWidth
});

/**
 * Update the theme.
 * @param theme the theme
 */
export const updateTheme = (theme: UITheme): UIAction => ({
  type: UPDATE_THEME,
  theme
});

/**
 * Update the height of the window.
 * @param windowHeight the window height.
 */
export const updateWindowHeight = (windowHeight: number): UIAction => ({
  type: UPDATE_WINDOW_HEIGHT,
  windowHeight
});

/**
 * Update the width of the window.
 * @param windowWidth the window width.
 */
export const updateWindowWidth = (windowWidth: number): UIAction => ({
  type: UPDATE_WINDOW_WIDTH,
  windowWidth
});
