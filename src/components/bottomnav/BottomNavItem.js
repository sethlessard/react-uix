import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Icon from "../Icon";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  height: state.ui.bottomNavHeight
});

const BottomNavItem = ({ children, foregroundColor, icon, onClick, style }) => {
  const compStyle = {
    bottomNavItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      // padding: ".5rem",
      cursor: "pointer",
      color: foregroundColor,
      userSelect: "none",
      WebkitUserSelect: "none",
      fontSize: ".7rem"
    },
    icon: {
      fontSize: ".7rem"
    }
  };

  Object.assign(compStyle.bottomNavItem, style);
  return (
    <div style={compStyle.bottomNavItem} onClick={onClick}>
      <Icon color={foregroundColor} style={compStyle.icon}>{icon}</Icon>
      {children}
    </div>
  );
}

BottomNavItem.propTypes = {
  children: PropTypes.string,
  foregroundColor: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default connect(mapStateToProps)(BottomNavItem);
