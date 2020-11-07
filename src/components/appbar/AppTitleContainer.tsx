import React from "react";
import styled from "styled-components";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

const Wrapper = styled.div`
  margin-right: auto;
  display: inline-flex;
  align-items: center;
`;

export interface AppTitleContainerProps extends HasChildren, HasStyle { }

const AppTitleContainer = (props: AppTitleContainerProps) => {
  const style = {
    container: {}
  };
  Object.assign(style.container, props.style);
  return (
    <Wrapper style={style.container}>
      {props.children}
    </Wrapper>
  );
};

export default AppTitleContainer;
