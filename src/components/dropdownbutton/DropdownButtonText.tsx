import React from "react";
import styled from "styled-components";
import Text from "../Text";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

const Wrapper = styled.div`
`;

export interface DropdownButtonTextProps extends HasChildren, HasStyle { }

const DropdownButtonText = (props: DropdownButtonTextProps) => {
  const style = {
    dropdownText: {}
  };
  Object.assign(style.dropdownText, props.style);
  return (
    <Wrapper style={style.dropdownText}>
      <Text fontSize=".8rem">{props.children}</Text>
    </Wrapper>
  );
};

export default DropdownButtonText;
