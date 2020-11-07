import React from 'react';
import ReactChildren from '../types/ReactChildren';

export interface TooltipProps {
  children: ReactChildren;
}

const Tooltip = ({ children }: TooltipProps) => {
  // TODO: [RU-28] implement
  return <div>{children}</div>;
};

export default Tooltip;
