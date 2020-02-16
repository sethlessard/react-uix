import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

const ScrollbarStyle = createGlobalStyle(`
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
`);

const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const NavContent = (props) => {
  const style = {
    navContent: {}
  };
  return (
    <Wrapper style={style.navContent}>
      <ScrollbarStyle />
      {props.children}
    </Wrapper>
  );
};

NavContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default NavContent;
