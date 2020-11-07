import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { UIState } from "../../redux/reducers/ui";
import HasStyle from "../../types/HasStyle";
import Styleable from "../../types/Styleable";

import Icon from "../Icon";

const Wrapper = styled.div``;

export interface BottomNavItemIconProps extends HasStyle, Styleable {
  children: string;
  refBackgroundColor?: string;
  size?: number | string;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: BottomNavItemIconProps) => ({
  refBackgroundColor: ownProps.refBackgroundColor || state.ui.theme.primaryColor
});


const BottomNavItemIcon = ({ children, foregroundColor, refBackgroundColor, size = "1.2em", style: compStyle }: BottomNavItemIconProps) => {
  const style = {
    BottomNavItemIcon: {}
  };
  Object.assign(style.BottomNavItemIcon, compStyle);
  return (
    <Wrapper style={style.BottomNavItemIcon}>
      <Icon size={size} foregroundColor={foregroundColor} refBackgroundColor={refBackgroundColor}>{children}</Icon>
    </Wrapper>
  );
};

export default connect(mapStateToProps)(BottomNavItemIcon);
