import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from 'react-redux';
import { CheckboxWrapper, CheckboxInput, CheckboxMessage } from "@react-uix/styles";

const mapStateToProps = (state, ownProps) => ({
  color: ownProps.color || state.ui.theme.colorPrimary
});

const Wrapper = styled.div`${CheckboxWrapper}`;
const CB = styled.input`${CheckboxInput}`;
const Message = styled.span`${CheckboxMessage}`;

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    const { children, color, onChecked } = this.props;
    const style = {
      checkbox: {}
    };
    return (
      <Wrapper style={style.checkbox}>
        <CB
          color={color}
          type="checkbox"
          style={style.input}
          placeholder="checkbox"
          onChange={(event) => onChecked && onChecked(event.target.checked)}
        />
        {children &&
          <Message style={style.span}>{children}</Message>
        }
      </Wrapper>
    );
  }
}

Checkbox.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  onChecked: PropTypes.func
};

export default connect(mapStateToProps)(Checkbox);
