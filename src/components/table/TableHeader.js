import React from 'react';
import PropTypes from 'prop-types';

import "./Table.css";

const TableHeader = (props) => {
  return (
    <thead>{props.children}</thead>
  );
}

TableHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default TableHeader;
