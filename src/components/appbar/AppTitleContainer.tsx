import React, { CSSProperties, ReactNode } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: auto;
  display: inline-flex;
  align-items: center;
`;

export interface AppTitleContainerProps {
  children: ReactNode,
  style?: CSSProperties
}

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

AppTitleContainer.propTypes = {
  children: PropTypes.node
};

export default AppTitleContainer;
