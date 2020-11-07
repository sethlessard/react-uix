import React from "react";
import Icon from "../Icon";
import HasStyle from "../../types/HasStyle";
import Styleable from "../../types/Styleable";

export interface NavItemIconProps extends HasStyle, Styleable {
  children: string;
  size?: number;
}

const NavItemIcon = ({ children, size, foregroundColor, style: compStyle }: NavItemIconProps) => {
  const style = {
    navItemIcon: {}
  };
  Object.assign(style.navItemIcon, compStyle);
  return (
    <div className="NavItemIcon" style={style.navItemIcon}>
      {/* TODO: get foreground color from the UI theme */}
      <Icon size={size || "1.5rem"} foregroundColor={foregroundColor || "#000000"}>{children}</Icon>
    </div>
  );
};

export default NavItemIcon;
