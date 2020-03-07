import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background-color: rgb(223, 230, 233);
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
`;

const Example = (props) => {
  const style = {
    example: {}
  };
  Object.assign(style.example, props.style);
  return (
    <Wrapper style={style.example}>{props.children}</Wrapper>
  );
};

Example.propTypes = {
  children: PropTypes.node
};

export default Example;
