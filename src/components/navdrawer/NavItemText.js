import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import styles from "./NavItemText.css";
const NavItemText = (props) => {
  const style = {
    navItemText: {}
  };
  Object.assign(style.navItemText, props.style);
  return (
    <div className={styles.NavItemText} style={style.navItemText}>
      <Text>{props.children}</Text>
    </div>
  );
};

NavItemText.propTypes = {
  children: PropTypes.string
};

export default NavItemText;
