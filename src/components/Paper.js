import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
`;

const Paper = (props) => {
  const style = {
    paper: {}
  };
  Object.assign(style.paper, props.style);
  return (
    <Wrapper style={style.paper}>{props.children}</Wrapper>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  style: PropTypes.object
};

export default Paper;
