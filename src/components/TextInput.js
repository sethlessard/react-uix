import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
`;
const Input = styled.input`
  width: ${props => props.width || "200px"};
  display: block;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: .7em 0;
  border-bottom: solid 1px ${props => props.primaryColor};
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 96%, ${props => props.primaryColor} 4%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, ${props => props.primaryColor} 4%);
  color: #0e6252;
  outline: none;
`;

const mapStateToProps = (state) => ({
  primaryColor: state.ui.theme.colorPrimary
});

const TextInput = ({ onChange, placeholder, primaryColor, style: compStyle }) => {
  const style = {
    wrapper: {},
    textInput: {}
  };
  Object.assign(style.wrapper, compStyle);
  // if onChange is not defined, give it a default handler.
  if (!onChange) onChange = (_) => {};
  if (compStyle.width) style.textInput.width = compStyle.width;
  return (
    <Wrapper style={style.wrapper}>
      <Input primaryColor={primaryColor} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} style={style.textInput} type="text" />
    </Wrapper>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default connect(mapStateToProps)(TextInput);
