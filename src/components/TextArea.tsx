import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { UIState } from '../redux/reducers/ui';
import HasStyle from '../types/HasStyle';
import Styleable from '../types/Styleable';

export interface TextAreaProps extends HasStyle, Styleable {
  children?: string;
  placeholderColor?: string;
  resizable?: boolean;
  height?: string;
  width?: string;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: TextAreaProps) => ({
  // TODO: calculate the color based on the background color
  foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnLight,
  placeholderColor: ownProps.placeholderColor || state.ui.theme.primaryColor
});

const Wrapper = styled.div<{ height: string, width: string }>`
  width: ${props => (props.width) ? props.width : "100%"};
  height: ${props => (props.height) ? props.height : "100%"};
`;

const Input = styled.textarea<{ resizable: boolean, placeholderColor: string }>`
  width: calc(100% - 1em);
  height: calc(100% - 1em);
  resize: ${props => (props.resizable) ? "vertical" : "none"};
  border-radius: 4px;
  padding: .5em;
  color: ${props => props.color};
  font-family: 'Roboto', sans-serif;
  outline: none;
  -webkit-outline: none;
  border: 1px solid #ccc;
  ::placeholder {
    color: ${props => props.placeholderColor};
  }
`;

const TextArea = ({ children, foregroundColor, height = "100%", placeholderColor, resizable = false, width = "100%" }: TextAreaProps) => {
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
        color={foregroundColor}
        placeholder={children}
        placeholderColor={placeholderColor!!}
        resizable={resizable}
      />
    </Wrapper>
  );
};

export default connect(mapStateToProps)(TextArea);
