import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }
  render() {
    const { children } = this.props;
    const style = {
      checkbox: {
        display: "flex",
        alignItems: "center"
      },
      input: {

      },
      span: {
        fontSize: ".8rem",
        margin: "0 0 0 .5rem"
      }
    };
    return (
      <div style={style.checkbox}>
        <input type="checkbox" style={style.input} placeholder="checkbox" />
        { children &&
        <span style={style.span}>{children}</span>
        }
      </div>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.string
};

export default Checkbox;
