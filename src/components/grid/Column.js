import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, span }) => {
  return (<div>{children}</div>);
}

Column.propTypes = {
  children: PropTypes.node
};

export default Column;
