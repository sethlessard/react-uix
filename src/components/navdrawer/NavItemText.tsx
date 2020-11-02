import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";

const Wrapper = styled.div`
  margin: 0 0 0 2em;
  font-size: 1rem;
  font-weight: 300;
  height: fit-content;
`;

const NavItemText = (props) => {
  const style = {
    navItemText: {}
  };
  Object.assign(style.navItemText, props.style);
  return (
    <Wrapper style={style.navItemText}>
      <Text>{props.children}</Text>
    </Wrapper>
  );
};

NavItemText.propTypes = {
  children: PropTypes.string
};

export default NavItemText;
