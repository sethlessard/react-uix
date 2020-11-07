import React from 'react';
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface TableBodyProps extends HasChildren, HasStyle { }

const TableBody = (props: TableBodyProps) => {
  const style = {
    tableBody: {}
  };
  Object.assign(style.tableBody, props.style)
  return (
    <tbody style={style.tableBody}>{props.children}</tbody>
  );
};

export default TableBody;
