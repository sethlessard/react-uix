import React from "react";
import styled from "styled-components";

import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

export interface ToolbarOptionContainerProps extends HasChildren, HasStyle { }

const Wrapper = styled.div`
  float: right;
  display: flex;
  height: 100%;
  padding: 0 1em 0 0;
  align-items: center;
  justify-content: center;
`;

const ToolbarOptionContainer = ({ children, style: compStyle }: ToolbarOptionContainerProps) => {
  const style = {
    optionContainer: {}
  };
  Object.assign(style.optionContainer, compStyle);
  return (
    <Wrapper style={style.optionContainer}>
      {children}
    </Wrapper>
  );
};

export default ToolbarOptionContainer;
