import React, { CSSProperties } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import IconButton from "../IconButton";

import { toggleNavigationDrawer } from "../../redux/actions/ui";
import { UIState } from "../../redux/reducers/ui";

export interface AppbarToggleButtonProps {
  children?:string,
  color?: string,
  style: CSSProperties
};

const mapStateToProps = (state: { ui: UIState }) => ({
  colorPrimary: state.ui.theme.primaryColor
});

const mapDispatchToProps = (dispatch: (v: any) => void) => ({
  toggleNavigationDrawer: () => dispatch(toggleNavigationDrawer())
});

interface ConnectedAppbarToggleButtonProps extends AppbarToggleButtonProps {
  colorPrimary: string,
  toggleNavigationDrawer: () => void;
}

const Wrapper = styled.div`
  cursor: pointer;
`;

const AppbarToggleButton = (props: AppbarToggleButtonProps) => {
  const { children, color, colorPrimary, toggleNavigationDrawer, style: compStyle } = props as ConnectedAppbarToggleButtonProps;
  const style = {
    button: {}
  };
  Object.assign(style.button, compStyle);
  return (
    <Wrapper
      style={style.button}
      onClick={() => toggleNavigationDrawer()}
    >
      <IconButton color={color} size="1.5rem" refBackgroundColor={colorPrimary}>{children}</IconButton>
    </Wrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppbarToggleButton);
