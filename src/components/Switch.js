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
const InputSwitch = styled.input`${SwitchInput}`;
const Knob = styled.div`${SwitchKnob}`;

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    const { checked } = this.props;
    this.setState({ checked });
  }

  render() {
    const { children, colorPrimary, onChecked, style: compStyle } = this.props;
    const { checked } = this.state;
    const style = {
      Switch: {}
    };
    Object.assign(style.Switch, compStyle);
    const id = uuid();
    return (
      <Wrapper style={style.Switch}>
        {children &&
          <LabelContainer>
            <Label htmlFor={`switch-${id}`}>{children}</Label>
            <Spacer horizontal={true} size="1em" />
          </LabelContainer>}
        <SwitchContainer>
          <InputSwitch
            colorPrimary={colorPrimary}
            id={`switch-${id}`}
            type="checkbox"
            onChange={(event) => {
              const checked = event.target.checked;
              this.setState({ checked });
              onChecked && onChecked(checked);
            }}
            checked={checked}
          />
          <Knob on={(this.state.checked) ? "true" : "false"} />
        </SwitchContainer>
      </Wrapper>
    );
  }
}

Switch.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  onChecked: PropTypes.func
};

export default connect(mapStateToProps)(Switch);
