import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { ButtonWrapper, ButtonText } from "@react-uix/styles";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || "#fff",
  backgroundColor: ownProps.backgroundColor || state.ui.theme.colorPrimary
});

const StyledButton = styled.button`${ButtonWrapper}`;
const BText = styled.span`${ButtonText}`;

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
        <BText>{children}</BText>
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
