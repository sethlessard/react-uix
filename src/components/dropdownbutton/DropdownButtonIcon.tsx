import React from "react";
import Styleable from "../../types/Styleable";

import Icon from "../Icon";

export interface DropdownButtonIconProps extends Styleable {
  children: string;
};

const DropdownButtonIcon = (props: DropdownButtonIconProps) => {
  const style = {
    dropdownIcon: {
      margin: "0 1rem 0 0"
    }
  };
  return (
    <div style={style.dropdownIcon}>
      <Icon foregroundColor={props.foregroundColor}>{props.children}</Icon>
    </div>
  );
};

export default DropdownButtonIcon;
