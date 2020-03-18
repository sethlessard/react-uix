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
    textInput: {}
  };
  Object.assign(style.textInput, compStyle);
  // if onChange is not defined, give it a default handler.
  if (!onChange) onChange = (_) => {};
  return (
    <Wrapper style={style.textInput}>
      <Input primaryColor={primaryColor} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} type="text" />
    </Wrapper>
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default connect(mapStateToProps)(TextInput);
