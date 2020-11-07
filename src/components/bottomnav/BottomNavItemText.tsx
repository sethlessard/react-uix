import React from "react";
import styled from "styled-components";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

export interface BottomNavItemTextProps extends HasChildren, HasStyle {
  fontSize?: number | string;
};

const Wrapper = styled.div`

`;
const Text = styled.span<BottomNavItemTextProps>`
  font-family: "Roboto", sans-serif;
  font-size: ${props => props.fontSize};
`;

const BottomNavItemText = ({ children, fontSize = ".65rem", style: compStyle }: BottomNavItemTextProps) => {
  const style = {
    BottomNavItemText: {}
  };
  Object.assign(style.BottomNavItemText, compStyle);
  return (
    <Wrapper style={style.BottomNavItemText}>
      <Text fontSize={fontSize}>{children}</Text>
    </Wrapper>
  );
};

export default BottomNavItemText;
