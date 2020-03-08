import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icon from "./Icon";
import styled from "styled-components";

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

class IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
  }

  render() {
    const { children, color, refBackgroundColor, size, style: compStyle, onClick } = this.props;
    const { pressed } = this.state;
    const style = {
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

IconButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  refBackgroundColor: PropTypes.string,
  size: PropTypes.any,
  onClick: PropTypes.func
};

export default IconButton;
