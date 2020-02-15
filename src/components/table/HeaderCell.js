import React from 'react';
import PropTypes from 'prop-types';

import "./Table.css";

const HeaderCell = (props) => {
  return (
    <th>{props.children}</th>
  );
}

HeaderCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default HeaderCell;
