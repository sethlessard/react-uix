import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../Text";

const Wrapper = styled.div`
`;

const DropdownButtonText = (props) => {
  const style = {
    dropdownText: {}
  };
  Object.assign(style.dropdownText, props.style);
  return (
    <Wrapper style={style.dropdownText}>
      <Text fontSize=".8rem">{props.children}</Text>
    </Wrapper>
  );
};

DropdownButtonText.propTypes = {
  children: PropTypes.string
};

export default DropdownButtonText;
