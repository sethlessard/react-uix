import React from "react";
import { connect } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { UIState } from "../../redux/reducers/ui";

import Icon from "../Icon";

const Wrapper = styled.div`
`;

export interface BottomNavItemIconProps {
  children: string;
  color?: string;
  refBackgroundColor?: string;
  size?: number | string;
  style?: CSSProperties;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: BottomNavItemIconProps) => ({
  refBackgroundColor: ownProps.refBackgroundColor || state.ui.theme.primaryColor
});


const BottomNavItemIcon = ({ children, color, refBackgroundColor, size = "1.2em", style: compStyle }: BottomNavItemIconProps) => {
  const style = {
    BottomNavItemIcon: {}
  };
  Object.assign(style.BottomNavItemIcon, compStyle);
  return (
    <Wrapper style={style.BottomNavItemIcon}>
      <Icon size={size} color={color} refBackgroundColor={refBackgroundColor}>{children}</Icon>
    </Wrapper>
  );
};

export default connect(mapStateToProps)(BottomNavItemIcon);
