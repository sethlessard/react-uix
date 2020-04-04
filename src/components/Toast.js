import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { ToastWrapper, ToastMessage } from "@react-uix/styles";

const Wrapper = styled.div`${ToastWrapper}`;
const Message = styled.div`${ToastMessage}`;

const Toast = ({ children, visible = false }) => {
  const style = {
    toast: {}
  };

  return (
    <Wrapper
      style={style.toast}
      visible={visible}
    >
      <Message>{children}</Message>
    </Wrapper>
  );
};

Toast.propTypes = {
  visible: PropTypes.bool
};

export default Toast;
