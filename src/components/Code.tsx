import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styled from "styled-components";
import copy from "copy-to-clipboard";
import { CodeWrapper, CodeSpan, CodeCopyContainer } from "@react-uix/styles";

import IconButton from "./IconButton";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || "#33495e"
});

const Wrapper = styled.div`${CodeWrapper}`;
const Span = styled.span`${CodeSpan}`;
const CopyContainer = styled.div`${CodeCopyContainer}`;

const parseCode = (code) => {
  const html = [];
  let token = "";
  code = code.trim();
  for (let i = 0; i < code.length; i++) {
    const c = code.charAt(i);
    switch (c) {
      case " ":
        if (token.length > 0) {
          html.push(token);
          token = "";
        }
        html.push(`\u00A0`);
        break;
      case "\n":
        if (token.length > 0) {
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
  if (token.length > 0) html.push(token);

  return html;
};

const Code = ({ backgroundColor, foregroundColor, style: compStyle, text }) => {
  const style = {
    Code: {}
  };
  Object.assign(style.Code, compStyle);
  return (
    <Wrapper
      style={style.code}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <Span>
        {parseCode(text)}
      </Span>
      <CopyContainer>
        <IconButton
          onClick={() => {
            copy(text);
          }}
          color={foregroundColor}
          refBackgroundColor={backgroundColor}
        >
          assignment
        </IconButton>
      </CopyContainer>
    </Wrapper>
  );
};

Code.propTypes = {
  text: PropTypes.string
};

export default connect(mapStateToProps)(Code);
