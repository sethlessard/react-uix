import React from 'react';
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface RadioGroupProps extends HasChildren, HasStyle { }

const RadioGroup = (props: RadioGroupProps) => {
  const style = {
    radioGroup: {}
  };
  Object.assign(style.radioGroup, props.style);
  // TODO: [RU-27] implement
  return <div style={style.radioGroup}>{props.children}</div>;
};

export default RadioGroup;
