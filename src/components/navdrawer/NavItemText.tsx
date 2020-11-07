import React from "react";
import styled from "styled-components";
import Text from "../Text";
import HasStyle from "../../types/HasStyle";

export interface NavItemTextProps extends HasStyle {
  children: string;
}

const Wrapper = styled.div`
  margin: 0 0 0 2em;
  font-size: 1rem;
  font-weight: 300;
  height: fit-content;
`;

const NavItemText = (props: NavItemTextProps) => {
  const style = {
    navItemText: {}
  };
  Object.assign(style.navItemText, props.style);
  return (
    <Wrapper style={style.navItemText}>
      <Text>{props.children}</Text>
    </Wrapper>
  );
};

export default NavItemText;
