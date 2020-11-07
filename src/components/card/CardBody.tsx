import React from 'react';
import styled from "styled-components";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface CardBodyProps extends HasChildren, HasStyle { }

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
