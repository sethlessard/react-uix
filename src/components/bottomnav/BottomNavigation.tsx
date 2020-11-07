import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";

import {
  updateBottomNavDefined,
  updateBottomNavHeight
} from "../../redux/actions/ui";
import DropShadow from '../DropShadow';
import { UIState } from '../../redux/reducers/ui';
import { ScreenType } from '../../style/media';

export interface BottomNavigationProps {
  backgroundColor?: string;
  children?:React.ReactNode | React.ReactNode[];
  demo?: boolean;
  height?: number;
  foregroundColor?: string;
  mobileOnly?: boolean;
};

const mapStateToProps = (state: { ui: UIState }, ownProps: BottomNavigationProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnDark,
  backgroundColor: ownProps.backgroundColor || state.ui.theme.primaryColor,
  windowHeight: state.ui.window.height,
  windowWidth: state.ui.window.width
});

const mapDispatchToProps = (dispatch: (v: any) => void) => ({
  updateBottomNavDefined: (defined: boolean) => dispatch(updateBottomNavDefined(defined)),
  updateBottomNavHeight: (height: number) => dispatch(updateBottomNavHeight(height))
});

interface ConnectedBottomNavigationProps extends BottomNavigationProps {
  updateBottomNavDefined: (defined: boolean) => void;
  updateBottomNavHeight: (height: number) => void;
  windowHeight: number;
  windowWidth: number;
}

const Wrapper = styled.div<BottomNavigationProps>`
  ${props => (props.demo) ? `
    position: relative;
  ` : `
    position: fixed;
    bottom: 0;
  `}
  width: 100%;
  z-index: 2;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  user-select: none;
  -webkit-user-select: none;
`;
const Content = styled.div<BottomNavigationProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
  max-width: 920px;
  margin: 0 auto;
  color: ${props => props.foregroundColor};
`;

class BottomNavigation extends Component<BottomNavigationProps> {
  constructor(props: BottomNavigationProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { demo, height = 62, mobileOnly, updateBottomNavDefined, updateBottomNavHeight, windowWidth } = this.props as ConnectedBottomNavigationProps;

    if (!demo) {
      if ((mobileOnly && (windowWidth <= ScreenType.Tablet.valueOf())) || !mobileOnly) {
        updateBottomNavDefined(true);
        updateBottomNavHeight(height);
      }
    }
  }

  componentDidUpdate() {
    const { demo, mobileOnly, windowWidth, updateBottomNavDefined, updateBottomNavHeight } = this.props as ConnectedBottomNavigationProps;

    if (!demo && (mobileOnly && windowWidth > ScreenType.Tablet.valueOf())) {
      // no longer displaying the Bottom Nav
      updateBottomNavDefined(false);
      updateBottomNavHeight(0);
    }
  }

  render() {
    const { backgroundColor, children, demo, foregroundColor, height = 62, mobileOnly, windowWidth } = this.props as ConnectedBottomNavigationProps;
    const style = {
      bottomNavigation: {}
    };

    if (!demo && mobileOnly) {
      if (windowWidth > ScreenType.Tablet.valueOf()) {
        return <div style={{ display: "none" }} />;
      }
    }
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        demo={demo}
        height={height}
        style={style.bottomNavigation}
      >
        <DropShadow z={5}>
          <Content foregroundColor={foregroundColor}>
            {children}
          </Content>
        </DropShadow>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);
