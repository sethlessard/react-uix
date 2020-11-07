import React, { Component, CSSProperties } from 'react';
import Icon from "./Icon";
import styled from "styled-components";

import Clickable from '../types/Clickable';
import HasStyle from '../types/HasStyle';
import Styleable from '../types/Styleable';

const Wrapper = styled.div`
  position: relative;
  border: none;
  border-radius: 4px;
  vertical-align: center;
  text-align: center;
  padding: .5em;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
`;

export interface IconButtonProps extends HasStyle, Styleable, Clickable {
  children: string;
  refBackgroundColor?: string;
  size?: number | string;
  onClick?: () => void;
};

interface IconButtonState {
  pressed: boolean;
}

class IconButton extends Component<IconButtonProps, IconButtonState> {
  constructor(props: IconButtonProps) {
    super(props);
    this.state = {
      pressed: false
    };
  }

  render() {
    const { children, foregroundColor, refBackgroundColor, size, style: compStyle, onClick } = this.props;
    const { pressed } = this.state;
    const style: { [component: string]: CSSProperties } = {
      iconButton: {}
    };
    Object.assign(style.iconButton, compStyle);

    if (pressed) {
      style.iconButton.backgroundColor = "#eeeeee";
    }

    return (
      <Wrapper style={style.iconButton} onClick={onClick} onMouseLeave={() => this.setState({pressed: false})} onMouseDown={() => this.togglePress()} onMouseUp={() => this.togglePress()}>
        <Icon foregroundColor={foregroundColor} refBackgroundColor={refBackgroundColor} size={size}>{children}</Icon>
      </Wrapper>
    );
  }

  togglePress() {
    this.setState({ pressed: !this.state.pressed });
  }
}

export default IconButton;
