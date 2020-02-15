import React from 'react';
import PropTypes from 'prop-types';

import "./Table.css";

const TableRow = (props) => {
  const style = {
    tableRow: {
      backgroundColor: props.backgroundColor || "#ffffff",
      color: props.foregroundColor || "#000000"
    }
  };
  return (
    <tr style={style.tableRow}>{props.children}</tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  foregroundColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default TableRow;
