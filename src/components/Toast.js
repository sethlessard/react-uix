import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  opacity: 0;
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.2s;
  padding: .5em .75em;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Message = styled.div`
  color: #fff;
`;

const Toast = ({ children, visible }) => {
  const style = {
    toast: {}
  };

  if (visible) {
    style.toast.display = "block";
    style.toast.opacity = 1;
  }

  return (
    <Wrapper style={style.toast}>
      <Message>{children}</Message>
    </Wrapper>
  );
};

Toast.propTypes = {
  visible: PropTypes.bool
};

export default Toast;
