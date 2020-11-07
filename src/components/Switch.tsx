/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { v4 } from "uuid";

import Spacer from "./Spacer";
import { UIState } from '../redux/reducers/ui';
import Checkable from '../types/Checkable';
import HasStyle from '../types/HasStyle';

export interface SwitchProps extends Checkable, HasStyle {
  children: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: SwitchProps) => ({
  primaryColor: state.ui.theme.primaryColor,
  defaultChecked: (ownProps.defaultChecked === undefined) ? false : ownProps.defaultChecked
});

interface ConnectedSwitchProps extends SwitchProps {
  defaultChecked: boolean;
  primaryColor: string;
}

// adapted from: https://codeburst.io/pure-css3-input-as-the-ios-checkbox-8b6347d5cefb
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LabelContainer = styled.div``;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
`;

const SwitchContainer = styled.div`
  position: relative;
`;

const InputSwitch = styled.input<{ disabled: boolean, primaryColor: string }>`
  position: relative;
  -webkit-appearance: none;
  appearane: none;
  outline: none;
  width: 50px;
  height: 30px;
  background-color: #fff;
  border: 1px solid ${props => props.primaryColor};
  border-radius: 50px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: inset -20px 0 0 0 #fff;
  &:checked {
    box-shadow: inset 20px 0 0 0 ${props => props.primaryColor};
  }
  background-color: ${props => props.disabled ? "#eee" : "#fff"};
  box-shadow: inset -20px 0 0 0 ${props => props.disabled ? "#eee" : "#fff"};
`;

const Knob = styled.div<{ on: boolean }>`
  position: absolute;
  transition: left 0.3s ease-in-out;
  display: inline-block;
  top: 5px;
  left: ${props => (props.on) ? "25px" : "5px"};
  background: transparent;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  box-shadow: ${props => (props.on) ? "-2px 4px 3px rgba(0,0,0,0.05)" : "2px 4px 6px rgba(0,0,0,0.2)"};
  pointer-events: none;
`;

interface SwitchState {
  checked: boolean;
  defaultChecked: boolean;
}

class Switch extends Component<SwitchProps, SwitchState> {

  private readonly ref: React.RefObject<HTMLInputElement>;

  constructor(props: SwitchProps) {
    super(props);
    this.state = {
      checked: false,
      defaultChecked: false
    };
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { defaultChecked } = this.props as ConnectedSwitchProps;
    this.setState({ checked: defaultChecked, defaultChecked });
  }

  componentDidUpdate() {
    // if the checked prop was updated, reflect that in the state.
    if (this.props.defaultChecked !== this.state.defaultChecked) {
      this.setState({ checked: this.props.defaultChecked!!, defaultChecked: this.props.defaultChecked!! });
    }
  }

  render() {
    const { children, primaryColor, disabled = false, onChecked, style: compStyle } = this.props as ConnectedSwitchProps;
    const { checked } = this.state;
    const style = {
      Switch: {}
    };
    Object.assign(style.Switch, compStyle);
    const id = v4();
    return (
      <Wrapper style={style.Switch}>
        {children &&
          <LabelContainer>
            <Label htmlFor={`switch-${id}`}>{children}</Label>
            <Spacer horizontal={true} size="1em" />
          </LabelContainer>}
        <SwitchContainer
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
            primaryColor={primaryColor}
            id={`switch-${id}`}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            ref={this.ref}
          />
          <Knob on={checked} />
        </SwitchContainer>
      </Wrapper>
    );
  }
}


export default connect(mapStateToProps)(Switch);
