import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { updateAppbarDefined, updateAppbarHeight } from '../../redux/actions/ui';

const mapStateToProps = (state, ownProps) => {
  return {
    backgroundColor: ownProps.backgroundColor || state.ui.theme.colorPrimary,
    foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnDark
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateAppbarDefined: (appbarDefined) => dispatch(updateAppbarDefined(appbarDefined)),
  updateAppbarHeight: (height) => dispatch(updateAppbarHeight(height))
});

const Wrapper = styled.div`
  width: ${props => (props.demo) ? "100%" : "100vw"};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 3px 10px rgba(0,0,0,0.11), 0 3px 6px rgba(0,0,0,0.20);
  padding: 0 0 0 1.5em;
  user-select: none;
  -webkit-user-select: none;
  color: ${props => props.foregroundColor};
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height}px;
`;

class Appbar extends Component {
  componentDidMount() {
    const { demo, height = 62, updateAppbarDefined, updateAppbarHeight } = this.props;
    if (!demo) {
      updateAppbarDefined(true);
      updateAppbarHeight(height);
    }
  }

  render() {
    const { demo, backgroundColor, children, foregroundColor, height = 62, style: compStyle } = this.props;

    const style = {
      appbar: {
      }
    };

    if (!demo) {
      style.appbar.position = "fixed";
    }
    Object.apply(style.appbar, compStyle);
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        height={height}
        style={style.appbar}
        demo={demo}
      >
        {children}
      </Wrapper>
    );
  }
}

Appbar.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  demo: PropTypes.bool,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
