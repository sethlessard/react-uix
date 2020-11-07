import React from "react";
import styled from "styled-components";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

export interface NavContentProps extends HasChildren, HasStyle { }

const Wrapper = styled.div`
  padding: 0 0 4em 0;
`;

const NavContent = (props: NavContentProps) => {
  const style = {
    navContent: {}
  };
  Object.assign(style.navContent, props.style);
  return (
    <Wrapper style={style.navContent}>{ props.children }</Wrapper>
  );
};

export default NavContent;
