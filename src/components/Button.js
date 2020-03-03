import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || "#fff",
  backgroundColor: ownProps.backgroundColor || state.ui.theme.colorPrimary
});

const Wrapper = styled.button`
  position: relative;
  border: none;
  border-radius: 4;
  padding: 0.65em 1em;
  vertical-align: middle;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  transition: box-shadow 0.2s;

  &::-moz-focus-inner {
    border: none;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  &:hover::before {
    opacity: 0.08;
  }
  &:focus::before {
    opacity: 0.24;
  }
  &:hover:focus::before {
    opacity: 0.3;
  }
`;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { backgroundColor, children, foregroundColor, style: compStyle, onClick, variant } = this.props;
    const style = {
      button: {
        color: foregroundColor
      },
      text: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 1.25,
        textTransform: "uppercase",
        textAlign: "center",
        textOverflow: "ellipsis"
      }
    };

    switch (variant) {
      default:
        style.button.backgroundColor = backgroundColor;
        style.button.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
        break;
      case "text":
        style.button.backgroundColor = "transparent";
        break;
      case "outlined":
        style.button.backgroundColor = "transparent";
        break;
    }

    Object.assign(style.button, compStyle);

    return (
      <Wrapper style={style.button} onClick={onClick}>
        <span style={style.text}>{children}</span>
      </Wrapper>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  foregroundColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

export default connect(mapStateToProps)(Button);
