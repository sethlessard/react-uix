import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.foregroundColor,
  backgroundColor: ownProps.backgroundColor || state.ui.primaryColor
});

class BottomNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { demo } = this.props;
    if (!demo) {
      // TODO: implement
      // setBottomNavDefined(true);
      // setBottomNavHeight(style.bottomNavigation.height);
    }
  }

  render() {
    const { children, backgroundColor, foregroundColor, height } = this.props;
    const style = {
      bottomNavigation: {
        width: "100%",
        height: height || 62,
        backgroundColor: backgroundColor,
        display: "block",
        userSelect: "none",
        WebkitUserSelect: "none"
      },
      content: {
        display: "flex",
        height: height || 62,
        justifyContent: "space-evenly",
        alignItems: "center",
        minWidth: 250,
        width: "100%",
        maxWidth: 1180,
        margin: "0 auto",
        color: foregroundColor
      }
    };

    return (
      <div style={style.bottomNavigation}>
        <div style={style.content}>
          {children}
        </div>
      </div>
    );
  }
}

BottomNavigation.propTypes = {
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  demo: PropTypes.bool,
  height: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default connect(mapStateToProps)(BottomNavigation);
