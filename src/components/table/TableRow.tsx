import React from 'react';
import styled from "styled-components";
import media, { ScreenType } from "../../style/media";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';
import Styleable from '../../types/Styleable';

export interface TableRow extends HasChildren, HasStyle, Styleable { }

const Wrapper = styled.tr<Styleable>`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: ${props => props.backgroundColor || "#fff"};
  color: ${props => props.foregroundColor || "#000"};


  ${media(ScreenType.Phone)`
    border: none;
    padding: 1em 0;
    display: block;
  `}
`;

const TableRow = ({ backgroundColor, children, foregroundColor, style: compStyle }: TableRow) => {
  const style = {
    tableRow: {}
  };
  Object.assign(style.tableRow, compStyle);
  return (
    <Wrapper
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
      style={style.tableRow}
    >
      {children}
    </Wrapper>
  );
};

export default TableRow;
