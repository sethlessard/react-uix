import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor,
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor
});

const Wrapper = styled.div`
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
    },
    i: {
    }
  };

  Object.assign(style.icon, compStyle);
  return (
    <Wrapper style={style.icon}>
      <I color={color} size={size} className="material-icons">{children}</I>
    </Wrapper>
  );
};

Icon.propTypes = {
  accent: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.string,
  style: PropTypes.object
};

export default connect(mapStateToProps)(Icon);
