import React, { ReactNode } from 'react';
import styled, { CSSProperties } from "styled-components";

export interface CardHeaderProps {
  children: ReactNode[];
  style?: CSSProperties;
};

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
