import React from "react";
import PropTypes from "prop-types";

import Text from "../Text";

const BottomNavItemText = ({ children, style: compStyle }) => {
  const style = {
    BottomNavItemText: {}
  };
  Object.assign(style.BottomNavItemText, compStyle);
  return (
    <div className="BottomNavItemText" style={style.BottomNavItemText}>
      <Text>{ children }</Text>
    </div>
  );
};

BottomNavItemText.propTypes = {
  children: PropTypes.string
};

export default BottomNavItemText;
