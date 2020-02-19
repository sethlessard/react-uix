import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import { updateAppbarDefined, updateAppbarHeight } from '../../redux/actions/ui';

const mapStateToProps = (state, ownProps) => {
  return {
    backgroundColor: ownProps.backgroundColor || state.ui.primaryColor,
    foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateAppbarDefined: (appbarDefined) => dispatch(updateAppbarDefined(appbarDefined)),
  updateAppbarHeight: (height) => dispatch(updateAppbarHeight(height))
});

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 0 0 0 1.5em;
`;

class Appbar extends Component {
  componentDidMount() {
    if (!this.props.demo) {
      this.props.updateAppbarDefined(true);
      this.props.updateAppbarHeight(this.props.height || 62);
    }
  }

  render() {
    const { demo, backgroundColor, children, foregroundColor, height, style: compStyle } = this.props;

    const style = {
      appbar: {
        height: height || 62,
        backgroundColor: backgroundColor,
        color: foregroundColor
      }
    };

    if (!demo) {
      style.appbar["position"] = "fixed";
    }
    Object.apply(style.appbar, compStyle);
    return (
      <Wrapper style={style.appbar}>
        {children}
      </Wrapper>
    );
  }
}

Appbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  height: PropTypes.number,
  demo: PropTypes.bool,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
