import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureUIStore, { history } from "../redux/configureUIStore";
import { updateTheme, updateWindowHeight, updateWindowWidth } from "../redux/actions/ui";
// import PropTypes from 'prop-types';
import styled from "styled-components";
import { AppWrapper } from "@react-uix/styles";

const uiStore = configureUIStore();

const Wrapper = styled.div`${AppWrapper}`;

class App extends Component {
  constructor(props) {
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

App.propTypes = {
  theme: PropTypes.object
};

export default App;
