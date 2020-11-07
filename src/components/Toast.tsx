import React from "react";
import styled from "styled-components";
import HasStyle from "../types/HasStyle";

export interface ToastProps extends HasStyle {
  children: string;
  visible: boolean;
}

const Wrapper = styled.div<ToastProps>`
  display: ${props => (props.visible) ? "block" : "none"};
  opacity: ${props => (props.visible) ? 1 : 0};
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.2s;
  padding: .5em .75em;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #fff;
`;

const Toast = (props: ToastProps) => {
  const style = {
    toast: {}
  };
  Object.assign(style.toast, props.style);
  return (
    <Wrapper
      style={style.toast}
      visible={props.visible}
    >
      {props.children}
    </Wrapper>
  );
};

export default Toast;
