import React from 'react';
import HasStyle from '../../types/HasStyle';

export interface DropdownListItemIconProps extends HasStyle {
  children: string;
};


const DropdownListItemIcon = (props: DropdownListItemIconProps) => {
  const style = {
    dropdownListItem: {}
  };
  Object.assign(style.dropdownListItem, props.style);
  // TODO: [RU-24] implement
  return <div />;
};

export default DropdownListItemIcon;
