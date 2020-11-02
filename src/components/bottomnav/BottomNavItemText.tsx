import React from "react";
import styled, { CSSProperties } from "styled-components";

export interface BottomNavItemTextProps {
  children: string;
  fontSize?: number | string;
  style?: CSSProperties;
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
