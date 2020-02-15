import React from 'react';
import PropTypes from 'prop-types';

import "./Table.css";

const TableBody = (props) => {
  return (
    <tbody>{props.children}</tbody>
  );
}

TableBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default TableBody;
