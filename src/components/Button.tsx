import React, { Component, CSSProperties } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

import { UIState } from '../redux/reducers/ui';
import Styleable from "../types/Styleable";
import HasStyle from '../types/HasStyle';

export interface ButtonProps extends HasStyle, Styleable {
  children: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

export enum ButtonVariant {
  Normal,
  Outlined,
  Text
}

const mapStateToProps = (state: { ui: UIState }, ownProps: ButtonProps) => ({
  foregroundColor: ownProps.foregroundColor || "#fff",
  backgroundColor: ownProps.backgroundColor || state.ui.theme.primaryColor
});

const StyledButton = styled.button<Styleable>`
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};
  transition: background-color 0.1s ease-in-out;
  /* TODO: set sizes */
  padding: 1em;
  &:hover,
  &:focus {
    background-color: ${props => lighten(0.1, props.backgroundColor!!)};
  }
  &:active {
    background-color: ${props => lighten(0.2, props.backgroundColor!!)};
  }
`;
const BText = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-align: center;
  text-overflow: ellipsis;
`;

class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { backgroundColor = "#000", children, foregroundColor = "#fff", style: compStyle, onClick, variant } = this.props;
    const style: { [component: string]: CSSProperties } = {
      button: {
      }
    };

    switch (variant) {
      default:
        break;
      case ButtonVariant.Text:
        style.button.backgroundColor = "transparent";
        break;
      case ButtonVariant.Outlined:
        style.button.backgroundColor = "transparent";
        break;
    }

    Object.assign(style.button, compStyle);

    return (
      <StyledButton
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        onClick={onClick}
        style={style.button}
      >
        <BText>{children}</BText>
      </StyledButton>
    );
  }
}

export default connect(mapStateToProps)(Button);
