import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./Button.css";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor
});

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { backgroundColor, children, foregroundColor, style: compStyle, onClick, variant } = this.props;
    const style = {
      button: {
        color: foregroundColor,
        position: "relative",
        border: "none",
        borderRadius: 4,
        padding: "0.65rem 1rem",
        verticalAlign: "middle",
        overflow: "hidden",
        outline: "none",
        cursor: "pointer",
        userSelect: "none",
        WebkitUserSelect: "none",
        transition: "box-shadow 0.2s"
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
      <button className={styles["pure-material-button-contained"]} style={style.button} onClick={onClick}>
        <span style={style.text}>{children}</span>
      </button>
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
