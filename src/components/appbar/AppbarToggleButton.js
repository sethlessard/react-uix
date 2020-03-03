import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import IconButton from "../IconButton";

import { toggleNavigationDrawer } from "../../redux/actions/ui";

const mapStateToProps = (state) => ({
  colorPrimary: state.ui.theme.colorPrimary
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationDrawer: () => dispatch(toggleNavigationDrawer())
});

const Wrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.4s;
  pointer-events: none;
`;

const AppbarToggleButton = ({ children, color, colorPrimary, toggleNavigationDrawer, style: compStyle, visible = true }) => {
  const style = {
    button: {}
  };
  if (visible) {
    style.button.visibility = "visible";
    style.button.opacity = 1;
    style.button.pointerEvents = "all";
  }
  Object.assign(style.button, compStyle);
  return (
    <Wrapper
      style={style.button}
      onClick={() => toggleNavigationDrawer()}
    >
      <IconButton color={color} refBackgroundColor={colorPrimary}>{children}</IconButton>
    </Wrapper>
  );
};

AppbarToggleButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  visible: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AppbarToggleButton);
