import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor,
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor
});

const Wrapper = styled.div`
  width: 1em;
  height: 1em;
`;

const I = styled.i`
  color: #000000;
  font-size: 1rem;
`;

const Icon = ({ accent, children, foregroundColor, size, style: compStyle }) => {
  const style = {
    icon: {
      width: size,
      height: size
    },
    i: {
      fontSize: size,
      color: foregroundColor
    }
  };

  Object.assign(style.icon, compStyle);
  return (
    <Wrapper style={style.icon} >
      <I className="material-icons">{children}</I>
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
