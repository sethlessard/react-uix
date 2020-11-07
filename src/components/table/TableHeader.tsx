import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import media, { ScreenType } from "../../style/media";

const Wrapper = styled.thead`
  ${media(ScreenType.Phone)`
    display: none;
  `}
`;

const TableHeader = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  );
};

TableHeader.propTypes = {
  children?:PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default TableHeader;
