import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { ColorPickerWrapper, ColorPickerInput } from "@react-uix/styles";

const Wrapper = styled.div`${ColorPickerWrapper}`;
const StyledInput = styled.input`${ColorPickerInput}`;

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
