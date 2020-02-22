import React from 'react';
import PropTypes from 'prop-types';

import Text from "../Text";

const DropdownListItemText = ({ children }) => {
  // TODO: implement
  return <div><Text>{children}</Text></div>;
};

DropdownListItemText.propTypes = {
  children: PropTypes.string
};

export default DropdownListItemText;
