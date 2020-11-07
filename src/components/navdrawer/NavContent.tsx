import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 0 4em 0;
`;

const NavContent = (props) => {
  const style = {
    navContent: {}
  };
  return (
    <Wrapper style={style.navContent}>
      {props.children}
    </Wrapper>
  );
};

NavContent.propTypes = {
  children?:PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default NavContent;
