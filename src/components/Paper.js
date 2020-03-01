import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
`;

const Paper = ({ backgroundColor = "#fff", children, style: compStyle }) => {
  const style = {
    paper: {}
  };
  Object.assign(style.paper, compStyle);
  return (
    <Wrapper backgroundColor={backgroundColor} style={style.paper}>{children}</Wrapper>
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
