import React from 'react';
// import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em 1em 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardHeader = ({ children, style: compStyle }) => {
  const style = {
    cardHeader: {}
  };
  Object.assign(style.cardHeader, compStyle);
  return <Wrapper style={style.cardHeader}>{ children }</Wrapper>;
}

CardHeader.propTypes = {

};

export default CardHeader;
