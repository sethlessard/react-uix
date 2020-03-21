import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { lighten } from "polished";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || "#fff",
  backgroundColor: ownProps.backgroundColor || state.ui.theme.colorPrimary
});

const StyledButton = styled.button`
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
    background-color: ${props => lighten(0.1, props.backgroundColor)};
  }

  &:active {
    background-color: ${props => lighten(0.2, props.backgroundColor)};
  }
`;
const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-align: center;
  text-overflow: ellipsis;
`;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { backgroundColor = "#000", children, foregroundColor = "#fff", style: compStyle, onClick, variant } = this.props;
    const style = {
      button: {
      }
    };

    switch (variant) {
      default:
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
      <StyledButton
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        onClick={onClick}
        style={style.button}
      >
        <ButtonText>{children}</ButtonText>
      </StyledButton>
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
