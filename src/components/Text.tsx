import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import HasStyle from '../types/HasStyle';
import Styleable from '../types/Styleable';
import { UIState } from '../redux/reducers/ui';

export interface TextProps extends HasStyle, Styleable {
  children: string;
  center?: boolean;
  fontSize?: string;
  fontWeight?: string;
}

const mapStateToProps = (state: { ui: UIState }) => ({
  // TODO: calculate color based on background
  foregroundColor: state.ui.theme.text.colorOnLight
});

const Span = styled.span<TextProps>`
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

const Text = ({ children, center, color, fontSize = ".8rem", fontWeight = "400", foregroundColor, style: compStyle }: TextProps) => {
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


export default connect(mapStateToProps)(Text);
