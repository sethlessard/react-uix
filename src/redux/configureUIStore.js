import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import uiReducer from "./reducers/ui";

export const history = createBrowserHistory();

const configureUIStore = (preloadedState) => {
  return createStore(
    uiReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
};
export default configureUIStore;
