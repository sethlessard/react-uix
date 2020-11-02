import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import media from "../../style/media";

const Wrapper = styled.tr`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background-color: ${props => props.backgroundColor || "#fff"};
  color: ${props => props.foregroundColor || "#000"};


  ${media.phone`
    border: none;
    padding: 1em 0;
    display: block;
  `}
`;

const TableRow = ({ backgroundColor, children, foregroundColor, style: compStyle }) => {
  const style = {
    tableRow: {}
  };
  Object.assign(style.tableRow, compStyle);
  return (
    <Wrapper backgroundColor={backgroundColor} foregroundColor={foregroundColor} style={style.tableRow}>{children}</Wrapper>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  foregroundColor: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default TableRow;
