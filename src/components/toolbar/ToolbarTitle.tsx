import React from "react";
import Heading from "../Heading";
import HasStyle from "../../types/HasStyle";
import styled from "styled-components";

export interface ToolbarTitle extends HasStyle {
  children: string;
}

const Wrapper = styled.div`
  height: 4em;
  display: inline-flex;
  align-items: center;
  margin: 0 0 0 1.5em;
`;

const ToolbarTitle = ({ children: title, style: compStyle }: ToolbarTitle) => {
  const style = {
    toolbarTitle: {},
    heading: {
      margin: 0
    }
  };
  Object.assign(style.toolbarTitle, compStyle);
  return (
    <Wrapper style={style.toolbarTitle}>
      <Heading h={6} style={{ margin: 0 }}>{title}</Heading>
    </Wrapper>
  );
};

export default ToolbarTitle;
