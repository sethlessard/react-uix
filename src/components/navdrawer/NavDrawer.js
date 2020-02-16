import React, { Component } from 'react';
import PropTypes from "prop-types";
import { updateNavDrawerDefined, updateNavDrawerOpen, updateNavDrawerClosingFromToggleButton } from '../../redux/actions/ui';
import { connect } from 'react-redux';

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
    const { appbarDefined, appbarHeight, bottomNavDefined, bottomNavHeight, navDrawerOpen } = this.props;
    let style = {
      navDrawer: {
        position: "fixed",
        overflowY: "scroll",
        width: this.props.width || 240,
        top: 0,
        height: `calc(100vh - ${((appbarDefined) ? appbarHeight : 0) + ((bottomNavDefined) ? bottomNavHeight : 0)}px)`,
        WebkitOverflowScrolling: "touch",
        WebkitTransform: `translate(-107%, 0)`,
        transform: `translate(-107%, 0)`,
        transition: "transform 300ms ease-in-out",
        zIndex: 2,
        backgroundColor: "#ffffff",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      }
    };

    // setNavDrawerWidth(style.navDrawer.width); TODO: create redux action
    if (appbarDefined) {
      style.navDrawer.top = appbarHeight;
    }

    if (navDrawerOpen) {
      style.navDrawer.WebkitTransform = `translate(0, 0)`;
      style.navDrawer.transform = `translate(0, 0)`;
    }

    return (
      <div style={style.navDrawer} ref={this.ref}>
        {this.props.children}
      </div>
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
