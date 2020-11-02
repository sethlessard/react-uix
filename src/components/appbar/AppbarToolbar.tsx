import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 2em 0 0;
  display: inline-flex;
`;

export interface AppbarToolbarProps {
  children: React.ReactNode | React.ReactNode[]
};

const AppbarToolbar = (props: AppbarToolbarProps) => {
  const style = {
    toolbar: {}
  };

  return (
    <Wrapper style={style.toolbar}>
      {props.children}
    </Wrapper>
  );
};

export default AppbarToolbar;
