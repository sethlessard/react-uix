import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { RowWrapper, RowContents } from "@react-uix/styles";

const Wrapper = styled.div`${RowWrapper}`;
const Contents = styled.div`${RowContents}`;

const Row = ({ children, style: compStyle }) => {
  const style = {
    row: {}
  };
  Object.assign(style.row, compStyle);
  return <Wrapper style={style.row}><Contents>{children}</Contents></Wrapper>;
};

Row.propTypes = {
  style: PropTypes.object
};

export default Row;
