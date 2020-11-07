import React, { Component } from 'react';
import { connect } from "react-redux";
import styled, { CSSProperties } from "styled-components";

import { updateAppbarDefined, updateAppbarHeight } from '../../redux/actions/ui';
import { UIState } from '../../redux/reducers/ui';
import HasStyle from '../../types/HasStyle';
import Styleable from '../../types/Styleable';

export interface AppbarProps extends Styleable, HasStyle {
  demo?: boolean,
  height?: number,
};

const mapStateToProps = (state: { ui: UIState }, ownProps: AppbarProps) => {
  return {
    backgroundColor: ownProps.backgroundColor || state.ui.theme.primaryColor,
    foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnDark
  };
};

const mapDispatchToProps = (dispatch: (v: any) => void) => ({
  updateAppbarDefined: (appbarDefined: boolean) => dispatch(updateAppbarDefined(appbarDefined)),
  updateAppbarHeight: (height: number) => dispatch(updateAppbarHeight(height))
});

interface ConnectedAppbarProps extends AppbarProps {
  updateAppbarDefined: (appbarDefined: boolean) => void;
  updateAppbarHeight: (height: number) => void;
}

const Wrapper = styled.div<AppbarProps>`
  width: ${props => (props.demo) ? "100%" : "100vw"};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 3px 10px rgba(0,0,0,0.11), 0 3px 6px rgba(0,0,0,0.20);
  padding: 0 0 0 1.5em;
  user-select: none;
  -webkit-user-select: none;
  color: ${props => props.foregroundColor};
  background-color: ${props => props.backgroundColor};
  height: ${props => props.height}px;
`;

class Appbar extends Component<AppbarProps> {
  componentDidMount() {
    const { demo, height = 62, updateAppbarDefined, updateAppbarHeight } = this.props as ConnectedAppbarProps;
    if (!demo) {
      updateAppbarDefined(true);
      updateAppbarHeight(height);
    }
  }

  render() {
    const { demo, backgroundColor, children, foregroundColor, height = 62, style: compStyle } = this.props;

    const style: { [component: string]: CSSProperties } = {
      appbar: {
        position: "fixed"
      }
    };

    if (demo) {
      style.appbar.position = "inherit";
    }
    Object.apply(style.appbar, compStyle);
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        height={height}
        style={style.appbar}
        demo={demo}
      >
        {children}
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
