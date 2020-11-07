import React from 'react';
import styled from "styled-components";
import media, { ScreenType } from "../../style/media";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface TableProps extends HasChildren, HasStyle { }

const Wrapper = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  ${media(ScreenType.Phone)`
    border: 0
  `}
`;

const Table = (props: TableProps) => {
  const style = {
    table: {}
  };
  Object.assign(style.table, props.style);
  return (
    <Wrapper style={style.table}>{props.children}</Wrapper>
  );
};

export default Table;
