import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "./Heading";
import { PaddedHeadingWrapper } from "@react-uix/styles";

const Wrapper = styled.div`${PaddedHeadingWrapper}`;

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
