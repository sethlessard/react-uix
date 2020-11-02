import React, { ReactNode } from 'react';

export interface DropdownListItemProps {
  children: ReactNode[];
};

const DropdownListItem = ({ children }: DropdownListItemProps) => {
  // TODO: [RU-23] implement
  return <div>{children}</div>;
};

export default DropdownListItem;
