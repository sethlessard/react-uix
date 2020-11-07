import React from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import copy from "copy-to-clipboard";

import IconButton from "./IconButton";
import { UIState } from '../redux/reducers/ui';
import HasStyle from '../types/HasStyle';
import Styleable from '../types/Styleable';

export interface CodeProps extends HasStyle, Styleable { 
  code: string;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: CodeProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.theme.primaryColor,
  backgroundColor: ownProps.backgroundColor || "#33495e"
});

const Wrapper = styled.div<Styleable>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor || "#fff"};
  padding: 1em 0;
  border-radius: 4px;
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
`;

const Span = styled.span<Styleable>`
  padding: 0 0 0 1em;
  display: inline-block;
  word-wrap: break-word;
  font-family: monospace;
  font-size: .8rem;
  line-height: 1rem;
  overflow-x: hidden;
`;

const CopyContainer = styled.div<Styleable>`
  display: inline-block;
  cursor: pointer;
  padding: .5em;
`;

const parseCode = (code: string) => {
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

const Code = ({ backgroundColor, code, foregroundColor, style: compStyle }: CodeProps) => {
  const style = {
    code: {}
  };
  Object.assign(style.code, compStyle);
  return (
    <Wrapper
      style={style.code}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      <Span>
        {parseCode(code)}
      </Span>
      <CopyContainer>
        <IconButton
          onClick={() => {
            copy(code);
          }}
          foregroundColor={foregroundColor}
          refBackgroundColor={backgroundColor}
        >
          assignment
        </IconButton>
      </CopyContainer>
    </Wrapper>
  );
};

export default connect(mapStateToProps)(Code);
