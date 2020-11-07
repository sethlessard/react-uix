import React from 'react';
import styled from "styled-components";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface NavGroupProps extends HasChildren, HasStyle { }

const Wrapper = styled.div`
  padding: 0.25em 0 1em 0;
`;

const NavGroup = ({ children, style: compStyle }: NavGroupProps) => {
  const style = {
    navGroup: {}
  };
  Object.assign(style.navGroup, compStyle);
  return <Wrapper style={style.navGroup}>{children}</Wrapper>;
};

export default NavGroup;
