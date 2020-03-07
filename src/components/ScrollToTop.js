import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
  appContentScrollableComponent: state.ui.appContentScrollableComponent
});

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { appContentScrollableComponent } = this.props;
    // scroll to the top on
    if (appContentScrollableComponent && appContentScrollableComponent.current) { appContentScrollableComponent.current.scrollTo(0, 0); }
  }

  render() {
    const { children, style: compStyle } = this.props;
    const style = {
      ScrollToTop: {}
    };
    Object.assign(style.ScrollToTop, compStyle);
    return (
      <div style={style.ScrollToTop}>
        { children }
      </div>
    );
  }
}

ScrollToTop.propTypes = {
};

export default connect(mapStateToProps)(withRouter(ScrollToTop));
