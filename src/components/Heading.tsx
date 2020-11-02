import React, { CSSProperties } from "react";
import styled from "styled-components";
import { H1Wrapper, H2Wrapper, H3Wrapper, H4Wrapper, H5Wrapper, H6Wrapper } from "@react-uix/styles";

const H1 = styled.h1`${H1Wrapper}`;
const H2 = styled.h2`${H2Wrapper}`;
const H3 = styled.h3`${H3Wrapper}`;
const H4 = styled.h4`${H4Wrapper}`;
const H5 = styled.h5`${H5Wrapper}`;
const H6 = styled.h6`${H6Wrapper}`;

interface HeadingProps {
  children: string;
  h: number;
  style?: CSSProperties;
};

const Heading = ({ children, h = 1, style: compStyle }: HeadingProps) => {
  const style = {
    h: {}
  };
  Object.assign(style.h, compStyle);
  switch (h) {
    default:
    case 1: return <H1 style={style.h}>{children}</H1>;
    case 2: return <H2 style={style.h}>{children}</H2>;
    case 3: return <H3 style={style.h}>{children}</H3>;
    case 4: return <H4 style={style.h}>{children}</H4>;
    case 5: return <H5 style={style.h}>{children}</H5>;
    case 6: return <H6 style={style.h}>{children}</H6>;
  }
};

export default Heading;
