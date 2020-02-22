import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Wrapper = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
  font-size: 16px;
  line-height: 1.5;
`;
const Track = styled.div`
  float: right;
  display: inline-block;
  margin: 5px 0 5px 10px;
  border-radius: 7px;
  width: 36px;
  height: 14px;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  vertical-align: top;
  transition: background-color 0.2s, opacity 0.2s;
`;
const Sw = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: -1;
  position: absolute;
  right: 6px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;

  &:checked {
    right: -10px;
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  }

  &:hover { opacity: 0.04; }
  &:focus { opacity: 0.12; }
  &:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }
`;
const Span = styled.span`
  display: inline-block;
  width: 100%;
  cursor: pointer;
`;
const Thumb = styled.div`
  position: absolute;
  top: 2px;
  right: 16px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: background-color 0.2s, transform 0.2s;
`;

const Switch = ({ children, style: compStyle }) => {
  const style = {
    Switch: {}
  };
  Object.assign(style.Switch, compStyle);
  return (
    <Wrapper style={style.Switch}>
      <Track />
      <Sw type="checkbox" id={`lb-${children}`} />
      <Span>{children}</Span>
      <Thumb />
    </Wrapper>
  );
};

Switch.propTypes = {
  children: PropTypes.string
};

export default Switch;
