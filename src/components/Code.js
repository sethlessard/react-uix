import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styled from "styled-components";
import copy from "copy-to-clipboard";

import IconButton from "./IconButton";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || "#33495e"
});

const Wrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor || "#fff"};
  padding: 1em 0;
  border-radius: 4px;
  display: block;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Span = styled.span`
  padding: 0 0 0 1em;
  display: inline-block;
  word-wrap: break-word;
  font-family: monospace;
  font-size: .8rem;
  line-height: 1rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CopyContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const parseCode = (code) => {
  const html = [];
  let token = "";
  for (let i = 0; i < code.length; i++) {
    const c = code.charAt(i);
    switch (c) {
      case "\t":
        if (token.length > 0) {
          html.push(token);
          token = "";
        }
        html.push(`\u00A0\u00A0`); // 2 spaces
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
      <Content>
        <Span>
          {parseCode(text)}
        </Span>
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
      </Content>
    </Wrapper>
  );
};

Code.propTypes = {
  text: PropTypes.string
};

export default connect(mapStateToProps)(Code);
