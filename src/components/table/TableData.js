import React from 'react';
import PropTypes from 'prop-types';

import "./Table.css";

const TableData = (props) => {
  return (
    <td>{props.children}</td>
  );
}

TableData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default TableData;
