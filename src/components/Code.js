import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styled from "styled-components";
import copy from "copy-to-clipboard";

import IconButton from "./IconButton";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor
});

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor || "#000"};
  color: ${props => props.foregroundColor || "#fff"};
  padding: 1em;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  display: inline;

`;
const Span = styled.span`
  display: inline;
  height: 100%;
  word-wrap: break-word;
  font-family: monospace;
  font-size: .8rem;
  line-height: 1rem;
`;
const CopyContainer = styled.div`
  display: inline;
  float: right;
  cursor:pointer;
  padding: .3em;
`;

const parseCode = (code) => {
  const html = [];
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
      <Content>
        <Span>
          {parseCode(text)}
        </Span>
      </Content>
      <CopyContainer>
        <IconButton
          onClick={() => {
            copy(text);
          }}
          color={foregroundColor}
        >
          assignment
        </IconButton>
      </CopyContainer>
    </Wrapper>
  );
}

Code.propTypes = {
  text: PropTypes.string
};

export default connect(mapStateToProps)(Code);
