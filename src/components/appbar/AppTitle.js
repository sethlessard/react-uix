import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Heading from "../Heading";

const Wrapper = styled.div`
  padding: 0 0 0 1.25em;
  display: inline;
`;

const AppTitle = ({ children, style: compStyle }) => {
  const style = {
    title: {}
  };
  Object.assign(style.title, compStyle);
  return (
    <Wrapper style={style.title}>
      <Heading h={6}>{children}</Heading>
    </Wrapper>
  );
};

AppTitle.propTypes = {
  children: PropTypes.string
};

export default AppTitle;
