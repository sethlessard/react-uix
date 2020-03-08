import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  UPDATE_APPBAR_DEFINED,
  UPDATE_APPBAR_HEIGHT,
  UPDATE_BOTTOMNAV_DEFINED,
  UPDATE_NAVDRAWER_OPEN,
  UPDATE_BOTTOMNAV_HEIGHT,
  UPDATE_NAVDRAWER_DEFINED,
  UPDATE_NAVDRAWER_WIDTH,
  UPDATE_THEME,
  UPDATE_APPCONTENT_SCROLLABLE_COMPONENT,
  UPDATE_NAVDRAWER_CLOSING_FROM_TOGGLE_BUTTON,
  UPDATE_WINDOW_HEIGHT,
  UPDATE_WINDOW_WIDTH
} from "../actions/ui";

const ui = (state = {
  theme: {
    primaryColor: "#000000",
    secondaryColor: "#111111",
    text: {
      colorOnLight: "#111",
      colorOnDark: "#fff"
    }
  },
  appbarDefined: false,
  appbarHeight: 0,
  appContentScrollableComponent: null,
  bottomNavDefined: false,
  bottomNavHeight: 0,
  navDrawerClosingFromToggleButton: false,
  navDrawerDefined: false,
  navDrawerOpen: false,
  navDrawerWidth: 0,
  windowHeight: window.innerHeight,
  windowWidth: window.innerWidth
}, action) => {
  const newState = Object.assign({}, state);
  // console.log(JSON.stringify(action));
  switch (action.type) {
    case UPDATE_THEME: newState.theme = action.theme; break;
    case UPDATE_APPBAR_DEFINED: newState.appbarDefined = action.appbarDefined; break;
    case UPDATE_APPBAR_HEIGHT: newState.appbarHeight = action.appbarHeight; break;
    case UPDATE_APPCONTENT_SCROLLABLE_COMPONENT: newState.appContentScrollableComponent = action.appContentScrollableComponent; break;
    case UPDATE_BOTTOMNAV_DEFINED: newState.bottomNavDefined = action.bottomNavDefined; break;
    case UPDATE_BOTTOMNAV_HEIGHT: newState.bottomNavHeight = action.bottomNavHeight; break;
    case UPDATE_NAVDRAWER_CLOSING_FROM_TOGGLE_BUTTON: newState.navDrawerClosingFromToggleButton = action.navDrawerClosingFromToggleButton; break;
    case UPDATE_NAVDRAWER_DEFINED: newState.navDrawerDefined = action.navDrawerDefined; break;
    case UPDATE_NAVDRAWER_OPEN: newState.navDrawerOpen = action.navDrawerOpen; break;
    case UPDATE_NAVDRAWER_WIDTH: newState.navDrawerOpen = action.navDrawerOpen; break;
    case UPDATE_WINDOW_HEIGHT: newState.windowHeight = action.windowHeight; break;
    case UPDATE_WINDOW_WIDTH: newState.windowWidth = action.windowWidth; break;
    default:
      break;
  }
  return newState;
};

const uiReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    ui
  });
};

export default uiReducer;
