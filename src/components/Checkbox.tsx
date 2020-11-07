import React, { Component } from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import Checkable from '../types/Checkable';
import Styleable from '../types/Styleable';
import { UIState } from '../redux/reducers/ui';

export interface CheckboxProps extends Checkable, Styleable {
  children: string;
  onChecked: (checked: boolean) => void;
}

const mapStateToProps = (state: { ui: UIState }, ownProps: CheckboxProps) => ({
  foregroundColor: ownProps.foregroundColor || state.ui.theme.primaryColor
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
  outline: none;
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
  background-color: unset;
`;

const Message = styled.span`
  font-size: .8rem;
  margin: 0 0 0 .25em;
  font-family: 'Roboto', sans-serif;
`;

class Checkbox extends Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    const { children, foregroundColor, onChecked } = this.props;
    const style = {
      checkbox: {}
    };
    return (
      <Wrapper style={style.checkbox}>
        <CB
          color={foregroundColor}
          type="checkbox"
          placeholder="checkbox"
          onChange={(event) => onChecked && onChecked(event.target.checked)}
        />
        {children &&
          <Message>{children}</Message>
        }
      </Wrapper>
    );
  }
}



export default connect(mapStateToProps)(Checkbox);
