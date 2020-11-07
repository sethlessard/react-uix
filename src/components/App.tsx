import React, { Component } from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureUIStore, { history } from "../redux/configureUIStore";
import { updateTheme, updateWindowHeight, updateWindowWidth } from "../redux/actions/ui";
import styled from "styled-components";
import { UITheme } from '../redux/reducers/ui';

const uiStore = configureUIStore();

export interface AppProps {
  theme?: UITheme;
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  font-size: 16px;
`;

class App extends Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this._handleWindowResize = this._handleWindowResize.bind(this);
  }

  componentDidMount() {
    const { theme } = this.props;
    if (theme) uiStore.dispatch(updateTheme(theme));
    window.addEventListener("resize", this._handleWindowResize);
    this._handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleWindowResize);
  }

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <Provider store={uiStore}>
          <ConnectedRouter history={history}>{children}</ConnectedRouter>
        </Provider>
      </Wrapper>
    );
  }

  _handleWindowResize() {
    uiStore.dispatch(updateWindowHeight(window.innerHeight));
    uiStore.dispatch(updateWindowWidth(window.innerWidth));
  }
}

export default App;
