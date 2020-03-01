import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`;
const Shadow1 = styled(Wrapper)`
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
const Shadow2 = styled(Wrapper)`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
const Shadow3 = styled(Wrapper)`
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;
const Shadow4 = styled(Wrapper)`
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;
const Shadow5 = styled(Wrapper)`
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const DropShadow = ({ children, style: compStyle, z = 1 }) => {
  const style = {
    DropShadow: {}
  };
  Object.assign(style.DropShadow, compStyle);
  if (z < 1) z = 1;
  if (z > 5) z = 5;

  switch (z) {
    case 1: return <Shadow1 style={style.DropShadow}>{children}</Shadow1>
    case 2: return <Shadow2 style={style.DropShadow}>{children}</Shadow2>
    case 3: return <Shadow3 style={style.DropShadow}>{children}</Shadow3>
    case 4: return <Shadow4 style={style.DropShadow}>{children}</Shadow4>
    case 5: return <Shadow5 style={style.DropShadow}>{children}</Shadow5>
  }
};

DropShadow.propTypes = {};

export default DropShadow;
