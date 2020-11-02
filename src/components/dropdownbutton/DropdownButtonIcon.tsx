import React from "react";

import Icon from "../Icon";

export interface DropdownButtonIconProps {
  children: string;
  color?: string;
};

const DropdownButtonIcon = (props: DropdownButtonIconProps) => {
  const style = {
    dropdownIcon: {
      margin: "0 1rem 0 0"
    }
  };
  return (
    <div style={style.dropdownIcon}>
      <Icon color={props.color}>{props.children}</Icon>
    </div>
  );
};

export default DropdownButtonIcon;
