import React from 'react';
import styled from "styled-components";
import HasChildren from '../types/HasChildren';
import HasStyle from '../types/HasStyle';

export interface RowProps extends HasChildren, HasStyle { }

const Wrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 120px;
  max-width: 920px;
  overflow: none;
  clear: both;
  height: auto;
`;

const Contents = styled.div``;

const Row = ({ children, style: compStyle }: RowProps) => {
  const style = {
    row: {}
  };
  Object.assign(style.row, compStyle);
  return <Wrapper style={style.row}><Contents>{children}</Contents></Wrapper>;
};

export default Row;
