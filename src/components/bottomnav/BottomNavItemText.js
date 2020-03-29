import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`

`;
const Text = styled.span`
  font-family: "Roboto", sans-serif;
`;

const BottomNavItemText = ({ children, style: compStyle }) => {
  const style = {
    BottomNavItemText: {}
  };
  Object.assign(style.BottomNavItemText, compStyle);
  return (
    <Wrapper style={style.BottomNavItemText}>
      <Text>{children}</Text>
    </Wrapper>
  );
};

BottomNavItemText.propTypes = {
  children: PropTypes.string
};

export default BottomNavItemText;
