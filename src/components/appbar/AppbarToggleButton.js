import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import { updateNavDrawerOpen, updateNavDrawerClosingFromToggleButton } from "../../redux/actions/ui";

const mapStateToProps = (state) => ({
  navDrawerOpen: state.ui.navDrawerOpen
});

const mapDispatchToProps = (dispatch) => ({
  updateNavDrawerOpen: (open) => dispatch(updateNavDrawerOpen(open)),
  updateNavDrawerClosingFromToggleButton: (closingFromToggle) => dispatch(updateNavDrawerClosingFromToggleButton(closingFromToggle))
});

const Wrapper = styled.div`
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition: opacity 0.4s;
  pointer-events: none;
`;

const AppbarToggleButton = ({ children, navDrawerOpen, updateNavDrawerClosingFromToggleButton, updateNavDrawerOpen, style: compStyle, visible = true }) => {
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
    <Wrapper style={style.button}
      onClick={() => {
        updateNavDrawerClosingFromToggleButton(true);
        updateNavDrawerOpen(!navDrawerOpen);
      }}>
      {children}
    </Wrapper>
  );
};

AppbarToggleButton.propTypes = {
  children: PropTypes.object,
  visible: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AppbarToggleButton);
