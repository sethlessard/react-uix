import React, { CSSProperties } from "react";
import styled from "styled-components";

import { updateNavDrawerOpen } from "../../redux/actions/ui";

import { connect } from "react-redux";
import { lighten } from "polished";
import { UIState } from "../../redux/reducers/ui";
import Styleable from "../../types/Styleable";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

export interface NavItemProps extends HasChildren, HasStyle, Styleable {
  active?: boolean;
  width?: number;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: NavItemProps) => ({
  width: ownProps.width || state.ui.navDrawer.width
});

const mapDispatchToProps = (dispatch: (v: any) => void) => ({
  updateNavDrawerOpen: (open: boolean) => dispatch(updateNavDrawerOpen(open))
});

interface ConnectedNavItemProps extends NavItemProps {
  width: number;
  updateNavDrawerOpen: (open: boolean) => void;
}

const Wrapper = styled.div<Styleable & { width: number }>`
  display: flex;
  align-items: center;
  padding: .75em 1em;
  user-select: none;
  -webkit-user-select: none;
  pointer-events: all;
  cursor: pointer;
  width: ${props => (props.width) ? props.width : 240}px;
  background-color: ${props => (props.backgroundColor) ? props.backgroundColor : "#fff"};
  color: ${props => (props.foregroundColor) ? props.foregroundColor : "#000"};
`;

const NavItem = (props: NavItemProps) => {
  const style: { [component: string]: CSSProperties } = {
    navItem: {
      backgroundColor: props.backgroundColor
    }
  };
  Object.assign(style.navItem, props.style);
  if (props.active) {
    style.navItem.backgroundColor = `${lighten(0.2, style.navItem.backgroundColor!!)}`;
  }
  return (
    <Wrapper
      backgroundColor={props.backgroundColor}
      foregroundColor={props.foregroundColor}
      style={style.navItem}
      onClick={() => (props as ConnectedNavItemProps).updateNavDrawerOpen(false)}
      width={(props as ConnectedNavItemProps).width}
    >
      {props.children}
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItem);
