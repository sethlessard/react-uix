import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { UIState } from "../../redux/reducers/ui";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";
import Styleable from "../../types/Styleable";

export interface ToolbarProps extends HasChildren, HasStyle, Styleable { }

const Wrapper = styled.div<Styleable>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};
  height: 4em;
  width: 100%;
  margin 0 0 1em 0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 3px;
`;

const mapStateToProps = (state: { ui: UIState }, ownProps: ToolbarProps) => ({
  backgroundColor: ownProps.backgroundColor || state.ui.theme.primaryColor,
  // TODO: calculate color based on background
  foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnDark
});

class Toolbar extends Component<ToolbarProps> {
  render() {
    const { children, backgroundColor, foregroundColor, style: compStyle } = this.props;
    const style = {
      toolbar: {}
    };
    Object.assign(style.toolbar, compStyle);
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        style={style.toolbar}
      >
        {children}
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps)(Toolbar);
