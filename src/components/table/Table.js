import React from 'react';
import PropTypes from 'prop-types';

import "./Table.css";

const Table = (props) => {
  return (
    <div>
      <table>{props.children}</table>
    </div>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Table;
