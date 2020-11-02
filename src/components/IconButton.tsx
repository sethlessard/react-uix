import React, { Component, CSSProperties } from 'react';
import Icon from "./Icon";
import styled from "styled-components";
import { IconButtonWrapper } from "@react-uix/styles";

const Wrapper = styled.div`${IconButtonWrapper}`;

export interface IconButtonProps {
  children: string;
  color?: string;
  refBackgroundColor?: string;
  size?: number | string;
  style?: CSSProperties;
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
    const { children, color, refBackgroundColor, size, style: compStyle, onClick } = this.props;
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
        <Icon color={color} refBackgroundColor={refBackgroundColor} size={size}>{children}</Icon>
      </Wrapper>
    );
  }

  togglePress() {
    this.setState({ pressed: !this.state.pressed });
  }
}

export default IconButton;
