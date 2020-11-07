import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import tinycolor from "tinycolor2";

import HasStyle from "../types/HasStyle";
import Styleable from "../types/Styleable";
import { UIState } from "../redux/reducers/ui";

interface IHasSize {
  size?: number | string;
}

export interface IconProps extends HasStyle, IHasSize, Styleable {
  accent?: boolean;
  children: string;
  refBackgroundColor?: string;
}

/**
 * Calculate the color of the Icon.
 * @param state the redux state.
 * @param ownProps Icon props.
 */
const calcColor = (state: { ui: UIState }, ownProps: IconProps) => {
  if (ownProps.foregroundColor) return ownProps.foregroundColor;
  if (ownProps.refBackgroundColor) {
    if (tinycolor(ownProps.refBackgroundColor).isDark()) return state.ui.theme.text.colorOnDark;

    return state.ui.theme.text.colorOnLight;
  }
  return state.ui.theme.primaryColor;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: IconProps) => ({
  color: calcColor(state, ownProps)
});

const Wrapper = styled.div<IHasSize>`
  margin: 0;
  padding: 0;
  height: ${props => props.size};
  width: ${props => props.size};
`;

const I = styled.i<IHasSize & Styleable>`
  color: ${props => props.foregroundColor};
  font-size: ${props => props.size};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`;

const Icon = ({ accent, children, foregroundColor, size = "1rem", style: compStyle }: IconProps) => {
  const style = {
    icon: {}
  };

  Object.assign(style.icon, compStyle);
  return (
    <Wrapper size={size} style={style.icon}>
      <I foregroundColor={foregroundColor} size={size} className="material-icons">{children}</I>
    </Wrapper>
  );
};



export default connect(mapStateToProps)(Icon);
