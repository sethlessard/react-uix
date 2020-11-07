import React, { CSSProperties } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { UIState } from '../redux/reducers/ui';
import Styleable from '../types/Styleable';
import HasStyle from '../types/HasStyle';

export interface TextInputProps extends Styleable, HasStyle {
  fontSize?: string;
  onChanged?: (value: string) => void;
  placeholder?: string;
}

const Wrapper = styled.div``;

const Input = styled.input<Styleable & { fontSize?: string }>`
  width: ${props => props.width || "200px"};
  display: block;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: .7em 0;
  border-bottom: solid 1px ${props => props.foregroundColor};
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 96%, ${props => props.foregroundColor} 4%);
  background: linear-gradient(top, rgba(255, 255, 255, 0) 96%, ${props => props.foregroundColor} 4%);
  color: #0e6252;
  outline: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  caret-color: ${props => props.foregroundColor};
  ${props => (props.fontSize) ? `font-size: ${props.fontSize}` : ""}
`;

const mapStateToProps = (state: { ui: UIState }, ownProps: TextInputProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.theme.primaryColor
});

const TextInput = ({ fontSize, onChanged, placeholder, foregroundColor, style: compStyle }: TextInputProps) => {
  const style: { [component: string]: CSSProperties } = {
    wrapper: {},
    textInput: {}
  };
  Object.assign(style.wrapper, compStyle);
  // if onChange is not defined, give it a default handler.
  if (!onChanged) onChanged = (_: string) => { };
  if (compStyle && compStyle.width) style.textInput.width = compStyle.width;
  return (
    <Wrapper style={style.wrapper}>
      <Input
        fontSize={fontSize}
        foregroundColor={foregroundColor}
        placeholder={placeholder}
        onChange={(event) => onChanged!!(event.target.value)}
        style={style.textInput}
        type="text"
      />
    </Wrapper>
  );
};

export default connect(mapStateToProps)(TextInput);
