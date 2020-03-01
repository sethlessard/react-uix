import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Icon from "../Icon";

const Wrapper = styled.div`
  padding: 0 0 .35em 0;
`;

const mapStateToProps = (state, ownProps) => ({
  color: ownProps.color || state.ui.foregroundColor
});

const BottomNavItemIcon = ({ children, color, size = "1.2em", style: compStyle }) => {
  const style = {
    BottomNavItemIcon: {}
  };
  Object.assign(style.BottomNavItemIcon, compStyle);
  return (
    <Wrapper style={style.BottomNavItemIcon}>
      <Icon size={size} color={color}>{ children }</Icon>
    </Wrapper>
  );
};

BottomNavItemIcon.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
};

export default connect(mapStateToProps)(BottomNavItemIcon);
