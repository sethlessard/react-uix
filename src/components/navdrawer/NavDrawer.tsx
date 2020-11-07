import React, { Component } from 'react';
import { updateNavDrawerDefined, updateNavDrawerOpen, updateNavDrawerWidth } from '../../redux/actions/ui';
import { connect } from 'react-redux';
import styled from "styled-components";
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';
import { UIState } from '../../redux/reducers/ui';

export interface NavDrawerProps extends HasChildren, HasStyle {
  openByDefault?: boolean;
  width?: number;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: NavDrawerProps) => {
  return {
    appbarDefined: state.ui.appbar.defined,
    appbarHeight: state.ui.appbar.height,
    bottomNavDefined: state.ui.bottomNav.defined,
    bottomNavHeight: state.ui.bottomNav.height,
    navDrawerOpen: state.ui.navDrawer.open,
    width: ownProps.width || 240
  };
};

const mapDispatchToProps = (dispatch: (v: any) => void) => ({
  updateNavDrawerDefined: (defined: boolean) => dispatch(updateNavDrawerDefined(defined)),
  updateNavDrawerOpen: (open: boolean) => dispatch(updateNavDrawerOpen(open)),
  updateNavDrawerWidth: (width: number) => dispatch(updateNavDrawerWidth(width))
});

interface ConnectedNavDrawerProps extends NavDrawerProps {
  appbarDefined: boolean;
  appbarHeight: number;
  bottomNavDefined: boolean;
  bottomNavHeight: number;
  navDrawerOpen: boolean;
  width: number;
  updateNavDrawerDefined: (defined: boolean) => void;
  updateNavDrawerOpen: (open: boolean) => void;
  updateNavDrawerWidth: (width: number) => void;
}

const Wrapper = styled.div<{ appbarDefined: boolean, appbarHeight: number, bottomNavDefined: boolean, bottomNavHeight: number, open: boolean, width: number }>`
  position: fixed;
  width: ${props => props.width}px;
  height: calc(100vh - ${props => ((props.appbarDefined) ? props.appbarHeight : 0) + ((props.bottomNavDefined) ? props.bottomNavHeight : 0)}px);
  top: ${props => (props.appbarDefined) ? `${props.appbarHeight}px` : 0};
  -webkit-transform: ${props => (props.open) ? "translate(0, 0)" : "translate(-107%, 0)"};
  -webkit-transition-property: -webkit-transform;
  transform:  ${props => (props.open) ? "translate(0, 0)" : "translate(-107%, 0)"};
  transition: transform 300ms ease-out;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

class NavDrawer extends Component<NavDrawerProps> {

  componentDidMount() {
    const {
      openByDefault,
      updateNavDrawerDefined,
      updateNavDrawerOpen,
      updateNavDrawerWidth,
      width
    } = this.props as ConnectedNavDrawerProps;
    updateNavDrawerDefined(true);
    updateNavDrawerOpen(openByDefault!!);
    updateNavDrawerWidth(width);
  }

  render() {
    const { appbarDefined, appbarHeight, bottomNavDefined, bottomNavHeight, children, navDrawerOpen, style: compStyle, width } = this.props as ConnectedNavDrawerProps;
    const style = {
      navDrawer: {}
    };
    Object.assign(style.navDrawer, compStyle);
    return (
      <Wrapper
        appbarDefined={appbarDefined}
        appbarHeight={appbarHeight}
        bottomNavDefined={bottomNavDefined}
        bottomNavHeight={bottomNavHeight}
        style={style.navDrawer}
        open={navDrawerOpen}
        width={width}
      >
        {children}
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
