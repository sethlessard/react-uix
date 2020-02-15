import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from "react-copy-to-clipboard";
import { connect } from "react-redux";

import Icon from "./Icon";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor
});

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const parseCode = (code) => {
      let html = [];
      let token = "";
      for (let i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        switch (c) {
          case "\t":
            if (token !== "") {
              html.push(token);
              token = "";
            }
            html.push(`\u00A0\u00A0`); // 2 spaces
            break;
          case "\n":
            if (token !== "") {
              html.push(token);
              token = "";
            }
            html.push(<br key={`code-br-${i}`} />);
            break;
          default:
            token += c;
            break;
        }
      }

      if (token !== "") {
        html.push(token);
        token = "";
      }

      return html;
    };

    const style = {
      code: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: ".5rem 0 .75rem",
        padding: "1rem",
        backgroundColor: this.state.primaryColor,
        borderRadius: 3
      },
      content: {
        display: "inline",
        fontFamily: "Menlo, Monaco, 'Courier New', monospace",
        fontSize: ".7rem",
        lineHeight: "1rem"
      },
      copyContainer: {
        display: "inline",
        float: "right",
        cursor: "pointer",
        margin: ".3rem"
      },
      img: {
        cursor: "pointer",
        userSelect: "none",
        WebkitUserSelect: "none",
        height: 16,
        width: 16,
        color: this.state.foregroundColor
      },
      span: {
        display: "inline",
        height: "100%",
        wordWrap: "break-word",
        color: this.state.foregroundColor
      }
    };
    return (
      <div style={style.code}>
        <div style={style.content}>
          <span style={style.span}>
            {parseCode(this.props.text)}
          </span>
        </div>
        <div style={style.copyContainer}>
          <CopyToClipboard text={this.props.text}>
            <Icon color={this.state.foregroundColor}>assignment</Icon>
          </CopyToClipboard>
        </div>
      </div>
    );
  }
}

Code.propTypes = {
  text: PropTypes.string
};

export default connect(mapStateToProps)(Code);
