/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import { SwitchWrapper, SwitchLabelWrapper, SwitchLabelContainerWrapper, SwitchContainerWrapper, SwitchInput, SwitchKnob } from "@react-uix/styles";

import Spacer from "./Spacer";

const mapStateToProps = (state) => ({
  colorPrimary: state.ui.theme.colorPrimary
});

// adapted from: https://codeburst.io/pure-css3-input-as-the-ios-checkbox-8b6347d5cefb
const Wrapper = styled.div`${SwitchWrapper}`;
const LabelContainer = styled.div`${SwitchLabelContainerWrapper}`;
const Label = styled.label`${SwitchLabelWrapper}`;
const SwitchContainer = styled.div`${SwitchContainerWrapper}`;
const InputSwitch = styled.input`
  ${SwitchInput}
  background-color: ${props => props.disabled ? "#eee" : "#fff"};
  box-shadow: inset -20px 0 0 0 ${props => props.disabled ? "#eee" : "#fff"};
`;
const Knob = styled.div`${SwitchKnob}`;

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      defaultChecked: false
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { checked } = this.props;
    this.setState({ checked, defaultChecked: checked });
  }

  componentDidUpdate() {
    const { defaultChecked } = this.state;
    const { checked } = this.props;

    // if the checked prop was updated, reflect that in the state.
    if (checked !== defaultChecked) {
      this.setState({ checked, defaultChecked: checked });
    }
  }

  render() {
    const { children, colorPrimary, disabled = false, onChecked, style: compStyle } = this.props;
    const { checked } = this.state;
    const style = {
      Switch: {}
    };
    Object.assign(style.Switch, compStyle);
    const id = uuid();
    return (
      <Wrapper style={style.Switch} disabled={disabled}>
        {children &&
          <LabelContainer>
            <Label htmlFor={`switch-${id}`}>{children}</Label>
            <Spacer horizontal={true} size="1em" />
          </LabelContainer>}
        <SwitchContainer
          disabled={disabled}
          onClick={
            () => {
              if (!disabled) {
                this.setState({ checked: !checked });
                onChecked && onChecked(!checked);
              }
            }
          }
        >
          <InputSwitch
            colorPrimary={colorPrimary}
            id={`switch-${id}`}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            ref={this.ref}
          />
          <Knob on={(checked) ? "true" : "false"} />
        </SwitchContainer>
      </Wrapper>
    );
  }
}

Switch.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChecked: PropTypes.func
};

export default connect(mapStateToProps)(Switch);
