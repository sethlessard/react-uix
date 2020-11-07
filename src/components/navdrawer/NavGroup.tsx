import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.25em 0 1em 0;
`;

const NavGroup = ({ children, style: compStyle }) => {
  const style = {
    navGroup: {}
  };
  Object.assign(style.navGroup, compStyle);
  return <Wrapper style={style.navGroup}>{children}</Wrapper>;
};

NavGroup.propTypes = {
  children?:PropTypes.node
};

export default NavGroup;
