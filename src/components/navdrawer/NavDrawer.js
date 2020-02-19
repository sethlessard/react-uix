import React, { Component } from 'react';
import PropTypes from "prop-types";
import { updateNavDrawerDefined, updateNavDrawerOpen, updateNavDrawerClosingFromToggleButton } from '../../redux/actions/ui';
import { connect } from 'react-redux';
import styled from "styled-components";

const mapStateToProps = (state) => {
  return {
    appbarDefined: state.ui.appbarDefined,
    appbarHeight: state.ui.appbarHeight,
    bottomNavDefined: state.ui.bottomNavDefined,
    bottomNavHeight: state.ui.bottomNavHeight,
    navDrawerOpen: state.ui.navDrawerOpen
  };
}

const mapDispatchToProps = (dispatch) => ({
  updateNavDrawerDefined: (defined) => dispatch(updateNavDrawerDefined(defined)),
  updateNavDrawerOpen: (open) => dispatch(updateNavDrawerOpen(open)),
  updateNavDrawerClosingFromToggleButton: (closingFromToggle) => dispatch(updateNavDrawerClosingFromToggleButton(closingFromToggle))
})

const Wrapper = styled.div`
  position: fixed;
  width: ${props => props.width || "240px"};
  height: calc(100vh - ${props => ((props.appbarDefined) ? props.appbarHeight : 0) + ((props.bottomNavDefined) ? props.bottomNavHeight : 0)}px);
  top: ${props => (props.appbarDefined) ? `${props.appbarHeight}px` : 0};
  -webkit-transform: ${props => (props.open) ? "translate(0, 0)" : "translate(-107%, 0)"};
  -webkit-transition-property: -webkit-transform;
  transform:  ${props => (props.open) ? "translate(0, 0)" : "translate(-107%, 0)"};
  transition: transform 300ms ease-in-out;
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
  }

  componentDidMount() {
    window.addEventListener("mousedown", (event) => this.handleClickOutside(event));
    window.addEventListener("touchstart", (event) => this.handleClickOutside(event));
    this.props.updateNavDrawerDefined(true);
    this.props.updateNavDrawerOpen(this.props.openByDefault);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", (event) => this.handleClickOutside(event));
    window.removeEventListener("touchstart", (event) => this.handleClickOutside(event));
    this.props.updateNavDrawerClosingFromToggleButton(false);
  }

  handleClickOutside(event) {
    const { navDrawerOpen, updateNavDrawerOpen } = this.props;
    if (navDrawerOpen &&
            event &&
            this.ref &&
            !this.ref.current.contains(event.target)) {
      updateNavDrawerOpen(false);
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
    // setNavDrawerWidth(style.navDrawer.width); TODO: create redux action
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  openByDefault: PropTypes.bool,
  width: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer);
