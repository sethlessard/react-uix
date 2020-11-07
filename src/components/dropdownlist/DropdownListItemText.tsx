import React from 'react';
import HasStyle from '../../types/HasStyle';

import Text from "../Text";

export interface DropdownListItemTextProps extends HasStyle {
  children: string;
};

const DropdownListItemText = (props: DropdownListItemTextProps) => {
  const style = {
    dropdownListItemText: {}
  };
  Object.assign(style.dropdownListItemText, props.style);
  // TODO: [RU-25] implement
  return <div style={style.dropdownListItemText}><Text>{props.children}</Text></div>;
};

export default DropdownListItemText;
