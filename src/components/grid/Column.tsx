import React, { ReactNode } from 'react';

export interface ColumnProps {
  children: ReactNode[];
};

const Column = ({ children }: ColumnProps) => {
  return (<div>{children}</div>);
};

export default Column;
