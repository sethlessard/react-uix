import React, { CSSProperties } from "react";
import styled from "styled-components";
import { DropShadowWrapper, DropShadow1, DropShadow2, DropShadow3, DropShadow4, DropShadow5 } from "@react-uix/styles";

const Wrapper = styled.div`${DropShadowWrapper}`;
const Shadow1 = styled(Wrapper)`${DropShadow1}`;
const Shadow2 = styled(Wrapper)`${DropShadow2}`;
const Shadow3 = styled(Wrapper)`${DropShadow3}`;
const Shadow4 = styled(Wrapper)`${DropShadow4}`;
const Shadow5 = styled(Wrapper)`${DropShadow5}`;

export interface DropShadowProps {
  children: React.ReactNode | React.ReactNode[];
  style?: CSSProperties;
  z?: number;
};

const DropShadow = ({ children, style: compStyle, z = 1 }: DropShadowProps) => {
  const style = {
    DropShadow: {}
  };
  Object.assign(style.DropShadow, compStyle);
  if (z < 1) z = 1;
  if (z > 5) z = 5;

  switch (z) {
    case 2: return <Shadow2 style={style.DropShadow}>{children}</Shadow2>
    case 3: return <Shadow3 style={style.DropShadow}>{children}</Shadow3>
    case 4: return <Shadow4 style={style.DropShadow}>{children}</Shadow4>
    case 5: return <Shadow5 style={style.DropShadow}>{children}</Shadow5>
    case 1:
    default:  
      return <Shadow1 style={style.DropShadow}>{children}</Shadow1>
  }
};

export default DropShadow;
