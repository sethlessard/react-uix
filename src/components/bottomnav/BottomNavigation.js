import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styled from "styled-components";
import { sizes } from "../../style/media";

import {
  updateBottomNavDefined,
  updateBottomNavHeight
} from "../../redux/actions/ui";
import DropShadow from '../DropShadow';

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.theme.text.colorOnDark,
  backgroundColor: ownProps.backgroundColor || state.ui.theme.colorPrimary,
  windowHeight: state.ui.windowHeight,
  windowWidth: state.ui.windowWidth
});

const mapDispatchToProps = (dispatch) => ({
  updateBottomNavDefined: (defined) => dispatch(updateBottomNavDefined(defined)),
  updateBottomNavHeight: (height) => dispatch(updateBottomNavHeight(height))
});

const Wrapper = styled.div`
  ${props => (props.demo) ? `
    position: relative;
  ` : `
    position: fixed;
    bottom: 0;
  `}
  width: 100%;
  z-index: 2;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  user-select: none;
  -webkit-user-select: none;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
  max-width: 920px;
  margin: 0 auto;
  color: ${props => props.foregroundColor};
`;

class BottomNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { demo, height = 62, mobileOnly, updateBottomNavDefined, updateBottomNavHeight, windowWidth } = this.props;

    if (!demo) {
      if ((mobileOnly && (windowWidth <= sizes.tablet)) || !mobileOnly) {
        updateBottomNavDefined(true);
        updateBottomNavHeight(height);
      }
    }
  }

  componentDidUpdate() {
    const { demo, mobileOnly, windowWidth, updateBottomNavDefined, updateBottomNavHeight } = this.props;

    if (!demo && (mobileOnly && windowWidth > sizes.tablet)) {
      // no longer displaying the Bottom Nav
      updateBottomNavDefined(false);
      updateBottomNavHeight(0);
    }
  }

  render() {
    const { backgroundColor, children, demo, foregroundColor, height = 62, mobileOnly, windowWidth } = this.props;
    const style = {
      bottomNavigation: {}
    };

    if (!demo && mobileOnly) {
      if (windowWidth > sizes.tablet) {
        return <div style={{ diplay: "none" }} />;
      }
    }
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        demo={demo}
        height={height}
        style={style.bottomNavigation}
      >
        <DropShadow z={5}>
          <Content foregroundColor={foregroundColor}>
            {children}
          </Content>
        </DropShadow>
      </Wrapper>
    );
  }
}

BottomNavigation.propTypes = {
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  mobileOnly: PropTypes.bool,
  demo: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.node
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);
