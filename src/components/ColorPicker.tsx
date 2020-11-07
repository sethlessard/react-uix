import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { UIState } from "../redux/reducers/ui";
import HasStyle from "../types/HasStyle";

interface IHasDefaultColor {
  defaultColor: string;
}

export interface ColorPickerProps extends HasStyle, IHasDefaultColor {
  onChange?: (color: string) => void;
}

const Wrapper = styled.div``;
const StyledInput = styled.input<IHasDefaultColor & { type: string }>`
  border: none;
  padding: .25em;
  outline: none;
  background-color: transparent;
  border-radius: 50px;
  &:active,
  &:hover {
    outline: none;
  }
`;

// TODO: make a js color picker

const mapStateToProps = (state: { ui: UIState }, ownProps: ColorPickerProps) => ({
  defaultColor: ownProps.defaultColor || state.ui.theme.primaryColor
});

const ColorPicker = ({ defaultColor = "#000", onChange, style: compStyle }: ColorPickerProps) => {
  const style = {
    ColorPicker: {}
  };
  Object.assign(style.ColorPicker, compStyle);
  return (
    <Wrapper style={style.ColorPicker}>
      <StyledInput
        type="color"
        defaultColor={defaultColor}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.value)}
      />
    </Wrapper>
  );
};

export default connect(mapStateToProps)(ColorPicker);
