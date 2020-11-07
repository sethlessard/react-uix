import React from 'react';
import styled from "styled-components";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface CardHeaderProps extends HasChildren, HasStyle { }

const Wrapper = styled.div`
  padding: 1em 1em 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardHeader = ({ children, style: compStyle }: CardHeaderProps) => {
  const style = {
    cardHeader: {}
  };
  Object.assign(style.cardHeader, compStyle);
  return <Wrapper style={style.cardHeader}>{children}</Wrapper>;
};

export default CardHeader;
