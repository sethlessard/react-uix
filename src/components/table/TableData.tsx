import React from 'react';
import styled from "styled-components";
import media, { ScreenType } from "../../style/media";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface TableDataProps extends HasChildren, HasStyle {
  label: string;
}

const Wrapper = styled.td<{ label: string }>`
  padding: .625em;
  text-align: center;
  font-size: .65rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  ${media<{ label: string }>(ScreenType.Phone)`
    border-bottom: 1px solid #ddd;
    display: block;
    text-align: right;

    &:before {
      content: "${ //@ts-ignore
      props => props.label}";
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  `}
`;

const TableData = (props: TableDataProps) => {
  return (
    <Wrapper label={props.label}>{(props.children) ? props.children : "\u00A0"}</Wrapper>
  );
};

export default TableData;
