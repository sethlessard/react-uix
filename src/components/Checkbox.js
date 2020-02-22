import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  color: ownProps.color || state.ui.primaryColor
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CB = styled.input`
  position: relative;
  top: -0.175em;
  height: 1.25em;
  width: 1.25em;
  appearance: none;
  -webkit-appearance: none;

  margin: 0 1em 0 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:before {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 1em;
    height: 1em;
    content: "";
    border: 2px solid #022620;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
  }

  &:checked:before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border: 3px solid ${props => props.color};
    height: .5em;
    border-top-style: none;
    border-right-style: none;
  }

  &:checked {
    background-color: unset;
  }
`;
const Message = styled.span`
  font-size: .8rem;
  margin: 0 0 0 1em;
  font-family: 'Roboto', sans-serif;
`;

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  render() {
    const { children, color } = this.props;
    const style = {
      checkbox: {}
    };
    return (
      <Wrapper style={style.checkbox}>
        <CB color={color} type="checkbox" style={style.input} placeholder="checkbox" />
        {children &&
          <Message style={style.span}>{children}</Message>
        }
      </Wrapper>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
};

export default connect(mapStateToProps)(Checkbox);
