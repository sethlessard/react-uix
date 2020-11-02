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
  UPDATE_WINDOW_HEIGHT,
  UPDATE_WINDOW_WIDTH,
  UIAction
} from "../actions/ui";
import { History } from "history";

export type UITheme = {
  primaryColor: string,
  secondaryColor: string,
  text: {
    colorOnLight: string,
    colorOnDark: string
  }
};

export type UIState = {
  theme: UITheme,
  appbar: {
    defined: boolean,
    height: number
  },
  appContentScrollableComponent?: React.Ref<HTMLDivElement>,
  bottomNav: {
    defined: boolean,
    height: number
  },
  navDrawer: {
    defined: boolean,
    open: boolean,
    width: number
  },
  window: {
    height: number,
    width: number
  }
};

const ui = (state: UIState = {
  theme: {
    primaryColor: "#000000",
    secondaryColor: "#111111",
    text: {
      colorOnLight: "#111",
      colorOnDark: "#fff"
    }
  },
  appbar: {
    defined: false,
    height: 0
  },
  bottomNav: {
    defined: false,
    height: 0
  },
  navDrawer: {
    defined: false,
    open: false,
    width: 0
  },
  window: {
    height: window.innerHeight,
    width: window.innerWidth
  }
}, action: UIAction) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_THEME: newState.theme = action.theme!!; break;
    case UPDATE_APPBAR_DEFINED: newState.appbar.defined = action.appbarDefined!!; break;
    case UPDATE_APPBAR_HEIGHT: newState.appbar.height = action.appbarHeight!!; break;
    case UPDATE_APPCONTENT_SCROLLABLE_COMPONENT: newState.appContentScrollableComponent = action.appContentScrollableComponent; break;
    case UPDATE_BOTTOMNAV_DEFINED: newState.bottomNav.defined = action.bottomNavDefined!!; break;
    case UPDATE_BOTTOMNAV_HEIGHT: newState.bottomNav.height = action.bottomNavHeight!!; break;
    case UPDATE_NAVDRAWER_DEFINED: newState.navDrawer.defined = action.navDrawerDefined!!; break;
    case UPDATE_NAVDRAWER_OPEN: newState.navDrawer.open = action.navDrawerOpen!!; break;
    case UPDATE_NAVDRAWER_WIDTH: newState.navDrawer.width = action.navDrawerWidth!!; break;
    case UPDATE_WINDOW_HEIGHT: newState.window.height = action.windowHeight!!; break;
    case UPDATE_WINDOW_WIDTH: newState.window.width = action.windowWidth!!; break;
    default:
      break;
  }
  return newState;
};

const uiReducer = (history: History) => {
  return combineReducers({
    router: connectRouter(history),
    ui
  });
};

export default uiReducer;
