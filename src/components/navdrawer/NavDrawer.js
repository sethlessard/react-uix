import React, { Component } from 'react';
import PropTypes from "prop-types";
import { updateNavDrawerDefined, updateNavDrawerOpen, updateNavDrawerClosingFromToggleButton, updateNavDrawerWidth } from '../../redux/actions/ui';
import { connect } from 'react-redux';
import styled from "styled-components";

const mapStateToProps = (state, ownProps) => {
  return {
    appbarDefined: state.ui.appbarDefined,
    appbarHeight: state.ui.appbarHeight,
    bottomNavDefined: state.ui.bottomNavDefined,
    bottomNavHeight: state.ui.bottomNavHeight,
    navDrawerOpen: state.ui.navDrawerOpen,
    navDrawerClosingFromToggleButton: state.ui.navDrawerClosingFromToggleButton,
    width: ownProps.width || 240
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateNavDrawerDefined: (defined) => dispatch(updateNavDrawerDefined(defined)),
  updateNavDrawerOpen: (open) => dispatch(updateNavDrawerOpen(open)),
  updateNavDrawerWidth: (width) => dispatch(updateNavDrawerWidth(width)),
  updateNavDrawerClosingFromToggleButton: (closingFromToggle) => dispatch(updateNavDrawerClosingFromToggleButton(closingFromToggle))
});

const Wrapper = styled.div`
  position: fixed;
  width: ${props => props.width}px;
  height: calc(100vh - ${props => ((props.appbarDefined) ? props.appbarHeight : 0) + ((props.bottomNavDefined) ? props.bottomNavHeight : 0)}px);
  top: ${props => (props.appbarDefined) ? `${props.appbarHeight}px` : 0};
  -webkit-transform: ${props => (props.open) ? "translate(0, 0)" : "translate(-107%, 0)"};
  -webkit-transition-property: -webkit-transform;
  transform:  ${props => (props.open) ? "translate(0, 0)" : "translate(-107%, 0)"};
  transition: transform 300ms ease-out;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

class NavDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();

    // binding
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    const {
      openByDefault,
      updateNavDrawerDefined,
      updateNavDrawerOpen,
      updateNavDrawerWidth,
      width
    } = this.props;
    window.addEventListener("mousedown", this.handleClickOutside);
    window.addEventListener("touchend", this.handleClickOutside);
    updateNavDrawerDefined(true);
    updateNavDrawerOpen(openByDefault);
    updateNavDrawerWidth(width);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClickOutside);
    window.removeEventListener("touchEn", this.handleClickOutside);
    this.props.updateNavDrawerClosingFromToggleButton(false);
  }

  handleClickOutside(event) {
    const { navDrawerClosingFromToggleButton, navDrawerOpen, updateNavDrawerOpen, updateNavDrawerClosingFromToggleButton } = this.props;
    if (navDrawerOpen &&
      event &&
      this.ref &&
      !navDrawerClosingFromToggleButton &&
      !this.ref.current.contains(event.target)) {
      updateNavDrawerOpen(false);
      updateNavDrawerClosingFromToggleButton(false);
    }
  }

  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { appbarDefined, appbarHeight, bottomNavDefined, bottomNavHeight, children, navDrawerOpen, style: compStyle, width } = this.props;
    const style = {
      navDrawer: {}
    };
    Object.assign(style.navDrawer, compStyle);
    return (
      <Wrapper
        appbarDefined={appbarDefined}
        appbarHeight={appbarHeight}
        bottomNavDefined={bottomNavDefined}
        bottomNavHeight={bottomNavHeight}
        style={style.navDrawer}
        open={navDrawerOpen}
        ref={this.ref}
        width={width}
      >
        {children}
      </Wrapper>
    );
  }
}

NavDrawer.propTypes = {
  children: PropTypes.node,
  openByDefault: PropTypes.bool,
  width: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
