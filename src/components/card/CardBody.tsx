import React, { ReactNode } from 'react';
import styled, { CSSProperties } from "styled-components";

export interface CardBodyProps {
  children: ReactNode[];
  style?: CSSProperties;
};

const Wrapper = styled.div`
  padding: 1em;
  word-wrap: break-word;
`;

const CardBody = ({ children, style: compStyle }: CardBodyProps) => {
  const style = {
    body: {}
  };
  Object.assign(style.body, compStyle);
  return <Wrapper style={style.body}>{children}</Wrapper>;
};

export default CardBody;
