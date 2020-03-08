import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import IconButton from "../IconButton";

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
`;
const Content = styled.div`
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
const Arrow = styled.div`
  position: absolute;
  top: 45px;
  left: 21px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom-color: #fff;
  border-top: 0;
  margin-left: -10px;
  margin-top: -10px;
  transition: opacity .2s ease-in-out;
  visibility: ${props => (props.visible) ? "visible" : "hidden"};
  opacity: ${props => (props.visible) ? 1 : 0};
`;

class DropdownButton extends Component {
  constructor(props) {
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

  handleClickOutside(event) {
    if (this.dialogRef &&
      event &&
      this.dialogRef.current &&
      this.dialogRef.current.contains(event.target)) { this.setInvisible(); }
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

DropdownButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default DropdownButton;
