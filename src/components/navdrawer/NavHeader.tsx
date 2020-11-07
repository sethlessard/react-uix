import React from "react";
import Styleable from "../../types/Styleable";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

export interface NavHeaderProps extends HasChildren, HasStyle, Styleable {
  width?: number;
}

const NavHeader = (props: NavHeaderProps) => {
  const style = {
    navHeader: {
      width: props.width || 240,
      backgroundColor: props.backgroundColor || "#ffffff",
      color: props.foregroundColor || "#000000"
    }
  };
  return (
    <div style={style.navHeader}>{props.children}</div>
  );
};

export default NavHeader;
