import React from 'react';
import HasStyle from '../../types/HasStyle';

export interface RadioButtonProps extends HasStyle {
  children: string;
}

const RadioButton = (props: RadioButtonProps) => {
  const style = {
    radioButton: {}
  };
  Object.assign(style.radioButton, props.style);
  // TODO: [RU-26] implement
  return <input style={style.radioButton} type="radio" />;
};

export default RadioButton;
