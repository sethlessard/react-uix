import React from 'react';
import { connect } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { UIState } from '../../redux/reducers/ui';

export interface BottomNavItemProps {
  children: React.ReactNode | React.ReactNode[];
  foregroundColor?: string;
  height?: number;
  style?: CSSProperties;
  onClick?: () => void;
};

const mapStateToProps = (state: { ui: UIState }, ownProps: BottomNavItemProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnDark,
  height: state.ui.bottomNav.height
});

const Wrapper = styled.div<BottomNavItemProps>`
  display: flex;
  max-width: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 1.5em;
  height: ${props => props.height}px;
  color: ${props => props.foregroundColor};
`;

const BottomNavItem = ({ children, foregroundColor, height, onClick, style }: BottomNavItemProps) => {
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

export default connect(mapStateToProps)(BottomNavItem);
