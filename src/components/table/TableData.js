import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.td`
  padding: .625em;
  text-align: center;
  font-size: .65rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  @media screen and (max-width: 720px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;

    &:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;

const TableData = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
};

TableData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default TableData;
