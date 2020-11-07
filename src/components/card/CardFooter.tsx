import React from 'react';
import styled from "styled-components";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface CardFooterProps extends HasChildren, HasStyle { }

const Wrapper = styled.div`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1em;
`;

const CardFooter = ({ children, style: compStyle }: CardFooterProps) => {
  const style = {
    cardFooter: {}
  };
  Object.assign(style.cardFooter, compStyle);
  return <Wrapper style={style.cardFooter}>{children}</Wrapper>;
};

export default CardFooter;
