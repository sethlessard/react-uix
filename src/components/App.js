import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureUIStore, { history } from "../redux/configureUIStore";
import { updateTheme } from "../redux/actions/ui";
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
    const { theme } = this.props;
    if (theme) uiStore.dispatch(updateTheme(theme));
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

App.propTypes = {
  theme: PropTypes.object
};

export default App;
