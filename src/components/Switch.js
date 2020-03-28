import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import Spacer from "./Spacer";

const mapStateToProps = (state) => ({
  colorPrimary: state.ui.theme.colorPrimary
});

// adapted from: https://codeburst.io/pure-css3-input-as-the-ios-checkbox-8b6347d5cefb
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LabelWrapper = styled.div`
`;
const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
`;
const SwitchWrapper = styled.div`
  position: relative;
`;
const InputSwitch = styled.input`
  position: relative;
  -webkit-appearance: none;
  appearane: none;
  outline: none;
  width: 50px;
  height: 30px;
  background-color: #fff;
  border: 1px solid ${props => props.colorPrimary};
  border-radius: 50px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: inset -20px 0 0 0 #fff;

  &:checked {
    box-shadow: inset 20px 0 0 0 ${props => props.colorPrimary};
  }
`;
const Knob = styled.div`
  position: absolute;
  transition: left 0.3s ease-in-out;
  display: inline-block;
  top: 5px;
  left: ${props => (props.on === "true") ? "25px" : "5px"};
  background: transparent;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  box-shadow: ${props => (props.on === "true") ? "-2px 4px 3px rgba(0,0,0,0.05)" : "2px 4px 6px rgba(0,0,0,0.2)"};

  pointer-events: none;
`;

class Switch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  render() {
    const { children, colorPrimary, onChecked, style: compStyle } = this.props;
    const style = {
      Switch: {}
    };
    Object.assign(style.Switch, compStyle);
    const id = uuid();
    return (
      <Wrapper style={style.Switch}>
        { children &&
          <LabelWrapper>
            <Label htmlFor={`switch-${id}`}>{ children }</Label>
            <Spacer horizontal={true} size="1em" />
          </LabelWrapper>
        }
        <SwitchWrapper>
          <InputSwitch
            colorPrimary={colorPrimary}
            id={`switch-${id}`}
            type="checkbox"
            onChange={(event) => {
              const checked = event.target.checked;
              this.setState({ checked });
              onChecked && onChecked(checked);
            }}
          />
          <Knob on={this.state.checked.toString()} />
        </SwitchWrapper>
      </Wrapper>
    );
  }
}

Switch.propTypes = {
  children: PropTypes.string,
  onChecked: PropTypes.func
};

export default connect(mapStateToProps)(Switch);
