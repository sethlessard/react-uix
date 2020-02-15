import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from "styled-components";

const mapStateToProps = (state) => ({
  foregroundColor: state.ui.foregroundColor
});

const Span = styled.span`
  font-weight: 400;
  letter-spacing: 0.5;
  display: block;
  font-family: 'Roboto', sans-serif;
`;

const Text = ({ children, color, fontSize = "1rem", foregroundColor, style: compStyle }) => {
  const style = {
    text: {
      fontSize,
      color: color || foregroundColor
    }
  };

  Object.assign(style.text, compStyle);
  return (
    <div>
      <Span style={style.text}>{ children }</Span>
    </div>
  );
}

Text.propTypes = {
  color: PropTypes.string
};

export default connect(mapStateToProps)(Text);
