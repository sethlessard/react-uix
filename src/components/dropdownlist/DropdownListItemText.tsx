import React from 'react';

import Text from "../Text";

export interface DropdownListItemTextProps {
  children?:string;
};

const DropdownListItemText = ({ children }: DropdownListItemTextProps) => {
  // TODO: [RU-25] implement
  return <div><Text>{children}</Text></div>;
};

export default DropdownListItemText;
