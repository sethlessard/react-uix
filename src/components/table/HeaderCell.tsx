import React from 'react';
import styled from "styled-components";
import Text from "../Text";
import HasStyle from '../../types/HasStyle';

export interface HeaderCellProps extends HasStyle {
  children: string;
}

const Wrapper = styled.th`
  padding: .625rem;
  text-align: center;
  font-size: .75rem;
`;

const HeaderCell = (props: HeaderCellProps) => {
  const style = {
    headerCell: {}
  };
  Object.assign(style.headerCell, props.style);
  return (
    <Wrapper style={style.headerCell}>
      <Text
        fontWeight="bold"
      >
        {props.children}
      </Text>
    </Wrapper>
  );
};

export default HeaderCell;
