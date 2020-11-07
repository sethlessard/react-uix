import React from "react";
import styled from "styled-components";
import HasChildren from "../types/HasChildren";
import HasStyle from "../types/HasStyle";

interface IHasSize {
  size?: string;
}

interface IHorizontal {
  horizontal?: boolean;
}

export interface SpacerProps extends HasChildren, HasStyle, IHasSize, IHorizontal { }

const Wrapper = styled.div<IHasSize & IHorizontal>`
  display: ${props => (props.horizontal) ? "inline-block" : "block"};
  height: ${props => (props.horizontal) ? "auto" : props.size};
  width: ${props => (props.horizontal) ? props.size : "auto"};
`;

const Spacer = ({ children, horizontal = false, size = "1em", style: compStyle }: SpacerProps) => {
  const style = {
    Spacer: {}
  };
  Object.assign(style.Spacer, compStyle);
  return (
    <Wrapper horizontal={horizontal} size={size} style={style.Spacer}>
      {children}
    </Wrapper>
  );
};

export default Spacer;
