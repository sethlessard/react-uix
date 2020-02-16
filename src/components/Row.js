import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 300px;
  max-width: 1080px;
  overflow: none;
  clear: both;
  height: auto;
`;
const Contents = styled.div`
`;

const Row = ({ children, style: compStyle }) => {
  const style = {
    row: {}
  };
  Object.assign(style.row, compStyle);
  return <Wrapper style={style.row}><Contents>{children}</Contents></Wrapper>;
}

Row.propTypes = {
  style: PropTypes.object
};

export default Row;
