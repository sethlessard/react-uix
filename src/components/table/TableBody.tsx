import React from 'react';
import ReactChildren from '../../types/ReactChildren';

export interface TableBodyProps {
  children: ReactChildren;
}

const TableBody = (props: TableBodyProps) => {
  return (
    <tbody>{props.children}</tbody>
  );
};

export default TableBody;
