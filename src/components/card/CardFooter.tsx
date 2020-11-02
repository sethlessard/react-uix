import React from 'react';
// import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1em;
`;

const CardFooter = ({ children, style: compStyle }) => {
  const style = {
    cardFooter: {}
  };
  Object.assign(style.cardFooter, compStyle);
  return <Wrapper style={style.cardFooter}>{children}</Wrapper>;
};

CardFooter.propTypes = {

};

export default CardFooter;
