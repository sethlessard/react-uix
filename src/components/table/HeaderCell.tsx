import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Text from "../Text";

const Wrapper = styled.th`
  padding: .625rem;
  text-align: center;
  font-size: .75rem;
`;

const HeaderCell = (props) => {
  return (
    <Wrapper>
      <Text
        fontWeight="bold"
      >
        {props.children}
      </Text>
    </Wrapper>
  );
};

HeaderCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default HeaderCell;
