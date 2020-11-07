import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from 'react-redux';
import { TextAreaWrapper, TextAreaInput } from "@react-uix/styles";

const mapStateToProps = (state, ownProps) => ({
  color: ownProps.color || state.ui.theme.text.colorOnLight,
  placeholderColor: ownProps.placeholderColor || state.ui.theme.colorPrimary
});

const Wrapper = styled.div`${TextAreaWrapper}`;
const Input = styled.textarea`${TextAreaInput}`;

const TextArea = ({ children, color, height = "100%", placeholderColor, resizable = false, width = "100%" }) => {
  const style = {
    container: {}
  };
  return (
    <Wrapper
      height={height}
      width={width}
      style={style.container}
    >
      <Input
        color={color}
        placeholder={children}
        placeholderColor={placeholderColor}
        resizable={resizable}
      />
    </Wrapper>
  );
};

TextArea.propTypes = {
  children?:PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resizable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default connect(mapStateToProps)(TextArea);
