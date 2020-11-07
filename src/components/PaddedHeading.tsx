import React from "react";
import styled from "styled-components";

import Heading from "./Heading";
import HasStyle from "../types/HasStyle";

export interface PaddedHeadingProps extends HasStyle {
  children: string;
  h: number;
}

const Wrapper = styled.div`
  padding: 1em 0 1.5em 0;
`;

const PaddedHeading = ({ children, h = 1, style: compStyle }: PaddedHeadingProps) => {
  const style = {
    PaddedHeading: {}
  };
  Object.assign(style.PaddedHeading, compStyle);
  return (
    <Wrapper style={style.PaddedHeading}>
      <Heading h={h}>{children}</Heading>
    </Wrapper>
  );
};

export default PaddedHeading;
