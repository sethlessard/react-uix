import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import tinycolor from "tinycolor2";

/**
 * Calculate the color of the Icon.
 * @param {*} state the redux state.
 * @param {*} ownProps Icon props.
 */
const calcColor = (state, ownProps) => {
  if (ownProps.color) return ownProps.color;
  if (ownProps.refBackgroundColor) {
    if (tinycolor(ownProps.refBackgroundColor).isDark()) return state.ui.theme.text.colorOnDark;

    return state.ui.theme.text.colorOnLight;
  }
  return state.ui.theme.colorPrimary;
}

const mapStateToProps = (state, ownProps) => ({
  color: calcColor(state, ownProps)
});

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: ${props => props.size};
  width: ${props => props.size};
`;

const I = styled.i`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;

const Icon = ({ accent, children, color, size = "1rem", style: compStyle }) => {
  const style = {
    icon: {
      width: size,
      height: size
    }
  };

  Object.assign(style.icon, compStyle);
  return (
    <Wrapper size={size}>
      <I color={color} size={size} className="material-icons">{children}</I>
    </Wrapper>
  );
};

Icon.propTypes = {
  accent: PropTypes.bool,
  color: PropTypes.string,
  refBackgroundColor: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.string,
  style: PropTypes.object
};

export default connect(mapStateToProps)(Icon);
