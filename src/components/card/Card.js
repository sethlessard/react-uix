import React from "react";
import PropTypes from "prop-types";
import Paper from "../Paper";
import Row from "../Row";
import styled from "styled-components";
import DropShadow from "../DropShadow";

const Wrapper = styled.div`
  border-radius: 4px;
`;

const Card = ({ backgroundColor, children, spanRow = false, style: compStyle, z = 1 }) => {
  const style = {
    card: {},
    paper: {
      borderRadius: 4
    }
  };
  Object.assign(style.card, compStyle);
  if (compStyle && compStyle.height) style.paper.height = compStyle.height;
  if (compStyle && compStyle.width) style.paper.width = compStyle.width;
  return (
    <Wrapper style={style.card}>
      <DropShadow z={z}>
        <Paper style={style.paper} backgroundColor={backgroundColor}>
          {spanRow &&
            <Row>{children}</Row>}
          {!spanRow &&
            children}
        </Paper>
      </DropShadow>
    </Wrapper>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  z: PropTypes.number
};

export default Card;
