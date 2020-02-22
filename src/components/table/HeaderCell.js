import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.th`
  padding: .625rem;
  text-align: center;
  font-size: .75rem;

  @media screen and (max-width: 720px) {

  }
`;

const HeaderCell = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
};

HeaderCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default HeaderCell;
