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

/**
 * Toggle to the navigation drawer open/closed.
 * @returns {{ type: string, navDrawerOpen: boolean }}
 */
export const toggleNavigationDrawer = () => {
  return (dispatch, getState) => {
    const { navDrawerOpen } = getState().ui;
    dispatch(updateNavDrawerOpen(!navDrawerOpen));
  }
}

/**
 * Update whether or not an appbar is used by the ui.
 * @param {boolean} appbarDefined whether or not the appbar is defined.
 * @returns {{ type: string, appbarDefined: boolean }}
 */
export const updateAppbarDefined = (appbarDefined = false) => ({
  type: UPDATE_APPBAR_DEFINED,
  appbarDefined
});

/**
 * Update the height of the appbar.
 * @param {number} appbarHeight the height of the appbar.
 */
export const updateAppbarHeight = (appbarHeight = 0) => ({
  type: UPDATE_APPBAR_HEIGHT,
  appbarHeight
});

/**
 * The AppContent scrollable component.
 * @param {div} appContentScrollableComponent the scrollable component
 */
export const updateAppContentScrollableComponent = (appContentScrollableComponent) => ({
  type: UPDATE_APPCONTENT_SCROLLABLE_COMPONENT,
  appContentScrollableComponent
});

/**
 * Update whether or not the ui uses a bottom nav.
 * @param {boolean} bottomNavDefined whether or not the bottom nav is defined.
 * @returns {{ type: string, bottomNavDefined: boolean }}
 */
export const updateBottomNavDefined = (bottomNavDefined = false) => ({
  type: UPDATE_BOTTOMNAV_DEFINED,
  bottomNavDefined
});

/**
 * Update the height of the bottom nav.
 * @param {number} bottomNavHeight the height of the bottom nav.
 */
export const updateBottomNavHeight = (bottomNavHeight = 0) => ({
  type: UPDATE_BOTTOMNAV_HEIGHT,
  bottomNavHeight
});

/**
 * Update whether or not the ui uses a nav drawer.
 * @param {boolean} navDrawerDefined whether or not the nav drawer is defined.
 * @returns {{ type: string, navDrawerDefined: boolean }}
 */
export const updateNavDrawerDefined = (navDrawerDefined = false) => ({
  type: UPDATE_NAVDRAWER_DEFINED,
  navDrawerDefined
});

/**
 * Update whether or not the nav drawer is open.
 * @param {boolean} navDrawerOpen whether or not the nav drawer is open.
 */
export const updateNavDrawerOpen = (navDrawerOpen = false) => ({
  type: UPDATE_NAVDRAWER_OPEN,
  navDrawerOpen
});

/**
 * Update the navigation drawer width.
 * @param {number} navDrawerWidth the width of the nav drawer.
 */
export const updateNavDrawerWidth = (navDrawerWidth = 0) => ({
  type: UPDATE_NAVDRAWER_WIDTH,
  navDrawerWidth
});

/**
 * Update the theme.
 * @param {{ primaryColor: string, secondaryColor: string, text: { colorOnLight: string, colorOnDark: string }}} theme the theme
 */
export const updateTheme = (theme) => ({
  type: UPDATE_THEME,
  theme
});

/**
 * Update the height of the window.
 * @param {number} windowHeight the window height.
 */
export const updateWindowHeight = (windowHeight) => ({
  type: UPDATE_WINDOW_HEIGHT,
  windowHeight
});

/**
 * Update the width of the window.
 * @param {number} windowWidth the window width.
 */
export const updateWindowWidth = (windowWidth) => ({
  type: UPDATE_WINDOW_WIDTH,
  windowWidth
});
