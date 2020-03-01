import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  height: state.ui.bottomNavHeight
});

const Wrapper = styled.div`
  display: flex;
  max-width: 85px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 1.5em;
  height: ${props => props.height}px;
  color: ${props => props.foregroundColor};
`;

const BottomNavItem = ({ children, foregroundColor, height, onClick, style }) => {
  const compStyle = {
    bottomNavItem: {}
  };

  Object.assign(compStyle.bottomNavItem, style);
  return (
    <Wrapper foregroundColor={foregroundColor} height={height} style={compStyle.bottomNavItem} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

BottomNavItem.propTypes = {
  children: PropTypes.node,
  foregroundColor: PropTypes.string,
  onClick: PropTypes.func
};

export default connect(mapStateToProps)(BottomNavItem);
