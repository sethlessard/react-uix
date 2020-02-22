import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    // TODO: implement
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

DropdownList.propTypes = {
  children: PropTypes.node
};

export default DropdownList;
