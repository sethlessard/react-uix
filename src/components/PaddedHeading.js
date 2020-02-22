import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";

const Wrapper = styled.div`
  padding: 1em 0 1.5em 0;
`;

const PaddedHeading = ({ children, h = 1, style: compStyle }) => {
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

PaddedHeading.propTypes = {
  children: PropTypes.string
};

export default PaddedHeading;
