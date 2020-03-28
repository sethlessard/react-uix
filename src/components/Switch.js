import React from 'react';
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
  box-shadow: inset -20px 0 0 0 #fff;

  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    background: transparent;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
    transition: left 0.2s ease-in-out;
  }

  &:checked {
    box-shadow: inset 20px 0 0 0 ${props => props.colorPrimary};
  }

  &:checked:after {
    left: 20px;
    box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
    transition: left 0.2s ease-in-out;
  }
`;

const Switch = ({ children, colorPrimary, onChecked, style: compStyle }) => {
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
          onChange={(event) => onChecked && onChecked(event.target.checked)}
        />
      </SwitchWrapper>
    </Wrapper>
  );
};

Switch.propTypes = {
  children: PropTypes.string,
  onChecked: PropTypes.func
};

export default connect(mapStateToProps)(Switch);
