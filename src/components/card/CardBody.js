import React from 'react';
// import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  word-wrap: break-word;
`;

const CardBody = ({ children, style: compStyle }) => {
  const style = {
    body: {}
  };
  Object.assign(style.body, compStyle);
  return <Wrapper style={style.body}>{children}</Wrapper>;
}

CardBody.propTypes = {

};

export default CardBody;
