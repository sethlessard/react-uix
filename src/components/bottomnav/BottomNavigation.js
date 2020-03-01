import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import styled from "styled-components";

import {
  updateBottomNavDefined,
  updateBottomNavHeight
} from "../../redux/actions/ui";
import DropShadow from '../DropShadow';

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor
});

const mapDispatchToProps = (dispatch) => ({
  updateBottomNavDefined: (defined) => dispatch(updateBottomNavDefined(defined)),
  updateBottomNavHeight: (height) => dispatch(updateBottomNavHeight(height))
});

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  user-select: none;
  -webkit-user-select: none;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
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
    const { demo, height = 62, updateBottomNavDefined, updateBottomNavHeight } = this.props;
    if (!demo) {
      updateBottomNavDefined(true);
      updateBottomNavHeight(height);
    }
  }

  render() {
    const { children, backgroundColor, foregroundColor, height = 62 } = this.props;
    const style = {
      bottomNavigation: {}
    };

    return (
      <Wrapper backgroundColor={backgroundColor} height={height} style={style.bottomNavigation}>
        <DropShadow style={{zIndex: 2}} z={5}>
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
  demo: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.node
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavigation);
