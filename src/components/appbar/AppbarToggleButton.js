import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import IconButton from "../IconButton";

import { toggleNavigationDrawer, updateNavDrawerClosingFromToggleButton } from "../../redux/actions/ui";

const mapStateToProps = (state) => ({
  colorPrimary: state.ui.theme.colorPrimary
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavigationDrawer: () => {
    dispatch(updateNavDrawerClosingFromToggleButton(true))
    dispatch(toggleNavigationDrawer())
  }
});

const Wrapper = styled.div`
  cursor: pointer;
`;

const AppbarToggleButton = ({ children, color, colorPrimary, toggleNavigationDrawer, style: compStyle }) => {
  const style = {
    button: {}
  };
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
  color: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(AppbarToggleButton);
