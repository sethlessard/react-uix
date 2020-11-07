import React from "react";
import styled from "styled-components";
import HasChildren from "../types/HasChildren";
import HasStyle from "../types/HasStyle";

const H1 = styled.h1`
  display: block;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  margin: 0;
  font-size: 96px;
  font-weight: 300;
  letter-spacing: -1.5;
`;

const H2 = styled.h2`
  display: block;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  margin: 0;
  font-size: 60px;
  font-weight: 300;
  letter-spacing: -0.5;
`;

const H3 = styled.h3`
  display: block;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  margin: 0;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0;
`;

const H4 = styled.h4`
  display: block;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  margin: 0;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.25;
`;

const H5 = styled.h5`
  display: block;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
`;

const H6 = styled.h6`
  display: block;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
  margin: 0;
  font-size: 20px;
  font-weight: 500;
`;

export interface HeadingProps extends HasChildren, HasStyle {
  h: number;
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
