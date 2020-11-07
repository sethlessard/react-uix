import React from 'react';

import ReactChildren from "../../types/ReactChildren";

export interface ColumnProps {
  children?: ReactChildren;
};

const Column = ({ children }: ColumnProps) => {
  return (<div>{children}</div>);
};

export default Column;
