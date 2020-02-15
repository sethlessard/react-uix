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
`;

const Row = (props) => {
  const style = {
    row: {}
  };
  Object.assign(style.row, props.style);
  return <Wrapper style={style.row}>{props.children}</Wrapper>;
}

Row.propTypes = {
  style: PropTypes.object
};

export default Row;
