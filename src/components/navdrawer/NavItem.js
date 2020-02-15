import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Util from "../Util";
import { updateNavDrawerOpen } from "../../redux/actions/ui";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  updateNavDrawerOpen: (open) => dispatch(updateNavDrawerOpen(open))
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: .75em 1em;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: all;
  cursor: pointer;
  width: ${props => (props.width) ? props.width : 240}px;
  background-color: ${props => (props.backgroundColor) ? props.backgroundColor : "#fff"};
  color: ${props => (props.foregroundColor) ? props.foregroundColor : "#000"};
`;

const NavItem = ({ active, backgroundColor, children, foregroundColor, style: compStyle, updateNavDrawerOpen, width }) => {
  const style = {
    navItem: {}
  };
  Object.assign(style.navItem, compStyle);
  if (active) {
    style.navItem.backgroundColor = `#${Util.substractHexColor(style.navItem.backgroundColor.replace("#", ""), "222222")}`;
  }
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      style={style.navItem}
      onClick={(e) => { updateNavDrawerOpen(false) }}
      width={width}
    >
      {children}
    </Wrapper>
  );
};

NavItem.propTypes = {
  width: PropTypes.number,
  active: PropTypes.bool,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
