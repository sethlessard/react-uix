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
// TODO: put the custom styles in the @react-uix/styles package
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
    };
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props;
    if (prevProps.checked !== checked) {
      if (this.ref && this.ref.current) {
        this.ref.current.checked = checked;
      }
    }
  }

  render() {
    const { children, colorPrimary, disabled = false, onChecked, checked, style: compStyle } = this.props;
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
        <SwitchContainer disabled={disabled}>
          <InputSwitch
            colorPrimary={colorPrimary}
            id={`switch-${id}`}
            type="checkbox"
            onChange={(event) => {
              const checked = event.target.checked;
              onChecked && onChecked(checked);
              this.forceUpdate();
            }}
            defaultChecked={checked}
            disabled={disabled}
            ref={this.ref}
          />
          <Knob on={(this.ref && this.ref.current && this.ref.current.checked) ? "true" : "false"} />
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
