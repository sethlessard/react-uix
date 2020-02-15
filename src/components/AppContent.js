import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => {
  return {
    appbarDefined: state.ui.appbarDefined,
    appbarHeight: state.ui.appbarHeight,
    bottomNavDefined: state.ui.bottomNavDefined,
    bottomNavHeight: state.ui.bottomNavHeight
  };
}

const Wrapper = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 0;
  background-color: #ecf0f1;
  min-width: 320;
  left: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Relative = styled.div`
  position: relative;
  z-index: 0;
  width: 100vw;
`;

const Content = styled.div`
  z-index: 0;
  padding: 1em 1.5em;
`;

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.calcHeight = this.calcHeight.bind(this);
  }

  calcHeight() {
    const { appbarDefined, appbarHeight, bottomNavDefined, bottomNavHeight } = this.props;
    let height = "100vh";
    let margins = 0;
    if (appbarDefined && bottomNavDefined) {
      margins = appbarHeight + bottomNavHeight;
    } else if (appbarDefined) {
      margins = appbarHeight;
    } else if (bottomNavDefined) {
      margins = bottomNavHeight;
    }

    height = `calc(100vh - ${margins}px)`;

    return height;
  }

  render() {
    const { appbarDefined, appbarHeight } = this.props;
    const height = this.calcHeight();
    let style = {
      appContent: {
        top: (appbarDefined) ? appbarHeight : 0,
        height
      },
      relative: {
        height
      },
      content: {
        height
      }
    };
    Object.apply(style.appContent, this.props.style);
    return (
      <Wrapper style={style.appContent}>
        <Relative style={style.relative}>
          <Content style={style.content}>
            {this.props.children}
          </Content>
        </Relative>
      </Wrapper>
    );
  }
}

AppContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default connect(mapStateToProps)(AppContent);
