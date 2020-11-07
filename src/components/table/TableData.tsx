import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Text from "../Text";
import media, { ScreenType } from "../../style/media";

const Wrapper = styled.td`
  padding: .625em;
  text-align: center;
  font-size: .65rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;

  ${media(ScreenType.Phone)`
    border-bottom: 1px solid #ddd;
    display: block;
    text-align: right;

    &:before {
      content: "${props => props.label}";
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  `}
`;

const TableData = (props) => {
  const text = (props.children) ? props.children : "\u00A0";
  return (
    <Wrapper label={props.label}><Text fontSize=".65rem">{text}</Text></Wrapper>
  );
};

TableData.propTypes = {
  children?:PropTypes.node,
  label: PropTypes.string
};

export default TableData;
