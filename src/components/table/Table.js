import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  @media screen and (max-width: 720px) {
    border: 0;
  }
`;

const Table = (props) => {
  return (
    <div>
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default Table;
