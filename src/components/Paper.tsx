import React from 'react';
import styled from "styled-components";
import HasChildren from '../types/HasChildren';
import Styleable from '../types/Styleable';
import HasStyle from '../types/HasStyle';

export interface PaperProps extends HasChildren, HasStyle, Styleable { }

const Wrapper = styled.div<Styleable>`
  background-color: ${props => props.backgroundColor};
`;

const Paper = ({ backgroundColor = "#fff", children, style: compStyle }: PaperProps) => {
  const style = {
    paper: {}
  };
  Object.assign(style.paper, compStyle);
  return (
    <Wrapper backgroundColor={backgroundColor} style={style.paper}>{children}</Wrapper>
  );
};

export default Paper;
