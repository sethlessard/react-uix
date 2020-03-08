import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: ${props => (props.horizontal) ? "inline-block" : "block"};
  height: ${props => (props.horizontal) ? "auto" : props.size};
  width: ${props => (props.horizontal) ? props.size : "auto"};
`;

const Spacer = ({ children, horizontal = false, size = "1em", style: compStyle }) => {
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

Spacer.propTypes = {
  horizontal: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Spacer;
