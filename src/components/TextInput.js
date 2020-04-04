import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from "react-redux";
import { TextInputWrapper, TextInputInput } from "@react-uix/styles";

const Wrapper = styled.div`${TextInputWrapper}`;
const Input = styled.input`${TextInputInput}`;

const mapStateToProps = (state) => ({
  primaryColor: state.ui.theme.colorPrimary
});

const TextInput = ({ fontSize, onChange, placeholder, primaryColor, style: compStyle }) => {
  const style = {
    wrapper: {},
    textInput: {}
  };
  Object.assign(style.wrapper, compStyle);
  // if onChange is not defined, give it a default handler.
  if (!onChange) onChange = (_) => { };
  if (compStyle && compStyle.width) style.textInput.width = compStyle.width;
  return (
    <Wrapper style={style.wrapper}>
      <Input
        fontSize={fontSize}
        primaryColor={primaryColor}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        style={style.textInput}
        type="text"
      />
    </Wrapper>
  );
};

TextInput.propTypes = {
  fontSize: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default connect(mapStateToProps)(TextInput);
