import React, { Component } from "react";
import styled from "styled-components";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

import IconButton from "../IconButton";

export interface DropdownButtonProps extends HasChildren, HasStyle {
  color?: string;
  icon: string;
  iconSize?: number | string;
  refBackgroundColor?: string;
};

interface DropdownButtonState {
  visible: boolean;
}

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
`;
const Content = styled.div<DropdownButtonState>`
  position: absolute;
  visibility: ${props => (props.visible) ? "visible" : "hidden"};
  opacity: ${props => (props.visible) ? 1 : 0};
  width: 160px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 3;
  top: 40px;
  transform: translate(-80%, 0);
  border-radius: 4px;
  background-color: #fff;
  transition: opacity .2s ease-in-out;
  cursor-events: all;
`;
const Arrow = styled.div<DropdownButtonState>`
  position: absolute;
  top: 45px;
  left: 21px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom-color: #fff;
  border-top: 0;
  z-index: 3;
  margin-left: -10px;
  margin-top: -10px;
  transition: opacity .2s ease-in-out;
  visibility: ${props => (props.visible) ? "visible" : "hidden"};
  opacity: ${props => (props.visible) ? 1 : 0};
`;

class DropdownButton extends Component<DropdownButtonProps, DropdownButtonState> {

  private readonly dialogRef: React.RefObject<HTMLDivElement>;

  constructor(props: DropdownButtonProps) {
    super(props);
    this.state = {
      visible: false
    };
    this.dialogRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("touchend", (event) => this.handleClickOutside(event));
  }

  componentWillUnmount() {
    window.removeEventListener("touchend", (event) => this.handleClickOutside(event));
  }

  handleClickOutside(event: TouchEvent) {
    if (this.dialogRef &&
      event &&
      this.dialogRef.current &&
      this.dialogRef.current.contains(event.target as Node)) { this.setInvisible(); }
  }

  render() {
    const { icon, color, children, refBackgroundColor, style: compStyle } = this.props;
    const { visible } = this.state;
    const style = {
      dropdownButton: {}
    };
    Object.assign(style.dropdownButton, compStyle);
    return (
      <Wrapper style={style.dropdownButton} onClick={() => this.toggleVisibility()}>
        <IconButton color={color} refBackgroundColor={refBackgroundColor} size={this.props.iconSize}>{icon}</IconButton>
        <Arrow visible={visible} />
        <Content visible={visible} ref={this.dialogRef} onMouseLeave={() => this.setInvisible()}>
          {children}
        </Content>
      </Wrapper>
    );
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  setInvisible() {
    this.setState({ visible: false });
  }
}

export default DropdownButton;
