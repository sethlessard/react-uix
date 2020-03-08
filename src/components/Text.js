import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";

const mapStateToProps = (state) => ({
  foregroundColor: state.ui.foregroundColor
});

const Span = styled.span`
  font-weight: ${props => props.fontWeight};
  letter-spacing: 0.5;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => props.fontSize};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  width: 100%;
  ${props => props.center ? "text-align: center;" : ""}
`;

const Text = ({ children, center, color, fontSize = ".8rem", fontWeight = "400", foregroundColor, style: compStyle }) => {
  const style = {
    text: {
      color: color || foregroundColor
    }
  };

  Object.assign(style.text, compStyle);
  return (
    <Span
      center={center}
      fontSize={fontSize}
      fontWeight={fontWeight}
      style={style.text}
    >
      {children}
    </Span>
  );
};

Text.propTypes = {
  center: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string
};

export default connect(mapStateToProps)(Text);
