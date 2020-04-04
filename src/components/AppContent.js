import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { updateAppContentScrollableComponent, updateNavDrawerOpen } from '../redux/actions/ui';
import { AppContentWrapper, AppContentRelative, AppContentContent, AppContentPadding } from "@react-uix/styles";

const mapStateToProps = (state, ownProps) => {
  return {
    appbarDefined: state.ui.appbarDefined,
    appbarHeight: state.ui.appbarHeight,
    bottomNavDefined: state.ui.bottomNavDefined,
    bottomNavHeight: state.ui.bottomNavHeight,
    navDrawerOpen: state.ui.navDrawerOpen
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateAppContentScrollableComponent: (ref) => dispatch(updateAppContentScrollableComponent(ref)),
  updateNavDrawerOpen: (value) => dispatch(updateNavDrawerOpen(value))
});

const Wrapper = styled.div`${AppContentWrapper}`;
const Relative = styled.div`${AppContentRelative}`;
const Content = styled.div`${AppContentContent}`;
const Padding = styled.div`${AppContentPadding}`;

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refScrollableContent = React.createRef();
    this.refWrapper = React.createRef();

    this.calcHeight = this.calcHeight.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
  }

  calcHeight() {
    const { appbarDefined, appbarHeight, bottomNavDefined, bottomNavHeight } = this.props;
    let height = "100vh";
    let margins = 0;
    if (appbarDefined && bottomNavDefined) margins = appbarHeight + bottomNavHeight;
    else if (appbarDefined) margins = appbarHeight;
    else if (bottomNavDefined) margins = bottomNavHeight;

    if (margins === 0) height = "100vh";
    else height = `calc(100vh - ${margins}px)`;

    return height;
  }

  componentDidMount() {
    const { updateAppContentScrollableComponent } = this.props;
    updateAppContentScrollableComponent(this.refScrollableContent);
  }

  handleClickInside(_) {
    const { navDrawerOpen, updateNavDrawerOpen } = this.props;

    // if the navigation drawer is open, close it
    if (navDrawerOpen) { updateNavDrawerOpen(false); }
  }

  render() {
    const { appbarDefined, appbarHeight } = this.props;
    const height = this.calcHeight();
    const style = {
      appContent: {}
    };
    Object.apply(style.appContent, this.props.style);
    return (
      <Wrapper
        appbarDefined={appbarDefined}
        appbarHeight={appbarHeight}
        height={height}
        onClick={this.handleClickInside}
        style={style.appContent}
      >
        <Relative height={height} style={style.relative}>
          <Content height={height} style={style.content} ref={this.refScrollableContent}>
            {this.props.children}
            <Padding />
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
