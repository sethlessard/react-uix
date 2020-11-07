import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface DropdownListItemIconProps {
  children?:ReactNode[];
};


const DropdownListItemIcon = ({ children }: DropdownListItemIconProps) => {
  // TODO: [RU-24] implement
  return <div />;
};

DropdownListItemIcon.propTypes = {
  children?:PropTypes.node
};

export default DropdownListItemIcon;
