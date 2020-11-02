import React from 'react';
import styled, { CSSProperties } from "styled-components";

export interface CardFooterProps {
  children: React.ReactNode[];
  style?: CSSProperties;
};

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
