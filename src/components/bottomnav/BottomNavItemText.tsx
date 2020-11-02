import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`

`;
const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: ${props => props.fontSize};
`;

const BottomNavItemText = ({ children, fontSize = ".65rem", style: compStyle }) => {
  const style = {
    BottomNavItemText: {}
  };
  Object.assign(style.BottomNavItemText, compStyle);
  return (
    <Wrapper style={style.BottomNavItemText}>
      <Text fontSize={fontSize}>{children}</Text>
    </Wrapper>
  );
};

BottomNavItemText.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default BottomNavItemText;
