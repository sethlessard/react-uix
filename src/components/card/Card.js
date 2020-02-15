import React from "react";
import PropTypes from "prop-types";
import Paper from "../Paper";
import styled from "styled-components";

const Card1 = styled.div`
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
const Card2 = styled.div`
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;
const Card3 = styled.div`
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;
const Card4 = styled.div`
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;
const Card5 = styled.div`
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const Card = ({ children, style: compStyle, z = 1 }) => {
  const style = {
    card: {},
    paper: {
      backgroundColor: (compStyle) ? compStyle.backgroundColor : "auto",
      borderRadius: 4
    }
  };
  Object.assign(style.card, compStyle);

  if (compStyle.height) style.paper.height = compStyle.height;
  if (compStyle.width) style.paper.width = compStyle.width;
  if (z < 1) z = 1;
  if (z > 5) z = 5;
  switch (z) {
    default:
    case 1: return <Card1 style={style.card}><Paper style={style.paper}>{children}</Paper></Card1>;
    case 2: return <Card2 style={style.card}><Paper style={style.paper}>{children}</Paper></Card2>;
    case 3: return <Card3 style={style.card}><Paper style={style.paper}>{children}</Paper></Card3>;
    case 4: return <Card4 style={style.card}><Paper style={style.paper}>{children}</Paper></Card4>;
    case 5: return <Card5 style={style.card}><Paper style={style.paper}>{children}</Paper></Card5>;
  }
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  style: PropTypes.object,
  z: PropTypes.number
};

export default Card;
