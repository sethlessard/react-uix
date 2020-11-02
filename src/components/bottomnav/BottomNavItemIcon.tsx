import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Icon from "../Icon";

const Wrapper = styled.div`
`;

const mapStateToProps = (state, ownProps) => ({
  refBackgroundColor: ownProps.refBackgroundColor || state.ui.theme.colorPrimary
});

const BottomNavItemIcon = ({ children, color, refBackgroundColor, size = "1.2em", style: compStyle }) => {
  const style = {
    BottomNavItemIcon: {}
  };
  Object.assign(style.BottomNavItemIcon, compStyle);
  return (
    <Wrapper style={style.BottomNavItemIcon}>
      <Icon size={size} color={color} refBackgroundColor={refBackgroundColor}>{children}</Icon>
    </Wrapper>
  );
};

BottomNavItemIcon.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
};

export default connect(mapStateToProps)(BottomNavItemIcon);
