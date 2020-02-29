import React, { Component } from 'react';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureUIStore, { history } from "../redux/configureUIStore";
import { updatePrimaryColor, updateSecondaryColor, updateForegroundColor } from '../redux/actions/ui';
// import PropTypes from 'prop-types';
import styled from "styled-components";

const uiStore = configureUIStore();

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  font-size: 16px;
`;

class App extends Component {
  componentDidMount() {
    if (this.props.primaryColor) uiStore.dispatch(updatePrimaryColor(this.props.primaryColor));
    if (this.props.secondaryColor) uiStore.dispatch(updateSecondaryColor(this.props.secondaryColor));
    if (this.props.foregroundColor) uiStore.dispatch(updateForegroundColor(this.props.foregroundColor));
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
}

export default App;
