import React from 'react';
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface ColumnProps extends HasChildren, HasStyle {};

const Column = (props: ColumnProps) => {
  const style = {
    column: {}
  };
  Object.assign(style.column, props.style);
  return (
    <div>{props.children}</div>
  );
};

export default Column;
