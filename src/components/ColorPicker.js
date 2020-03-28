import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
`;
const StyledInput = styled.input`
  border: none;
  padding: .25em;
  outline: none;
  background-color: transparent;
  border-radius: 50px;

  &:active,
  &:hover {
    outline: none;
  }
`;

// TODO: make a js color picker

const mapStateToProps = (state, ownProps) => ({
  defaultColor: ownProps.defaultColor || state.ui.theme.colorPrimary
});

const ColorPicker = ({ defaultColor = "#000", onChange, style: compStyle }) => {
  const style = {
    ColorPicker: {}
  };
  Object.assign(style.ColorPicker, compStyle);
  return (
    <Wrapper style={style.ColorPicker}>
      <StyledInput
        type="color"
        defaultColor={defaultColor}
        onChange={onChange}
      />
    </Wrapper>
  );
};

ColorPicker.propTypes = {
  defaultColor: PropTypes.string,
  onChange: PropTypes.func
};

export default connect(mapStateToProps)(ColorPicker);
