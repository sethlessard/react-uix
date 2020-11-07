import React from 'react';
import styled from "styled-components";
import media, { ScreenType } from "../../style/media";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface TableHeaderProps extends HasChildren, HasStyle { }

const Wrapper = styled.thead`
  ${media(ScreenType.Phone)`
    display: none;
  `}
`;

const TableHeader = (props: TableHeaderProps) => {
  const style = {
    tableHeader: {}
  };
  Object.assign(style.tableHeader, props.style);
  return (
    <Wrapper style={style.tableHeader}>{props.children}</Wrapper>
  );
};

export default TableHeader;
