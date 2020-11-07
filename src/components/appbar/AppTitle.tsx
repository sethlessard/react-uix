import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

const Wrapper = styled.div`
  padding: 0 0 0 1.25em;
  display: inline;
`;

export interface AppTitleProps extends HasChildren, HasStyle {}

const AppTitle = ({ children, style: compStyle }: AppTitleProps) => {
  const style = {
    title: {}
  };
  Object.assign(style.title, compStyle);
  return (
    <Wrapper style={style.title}>
      <Heading h={6}>{children}</Heading>
    </Wrapper>
  );
};

export default AppTitle;
