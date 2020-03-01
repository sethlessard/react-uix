import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const AppTitleContainer = (props) => {
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
