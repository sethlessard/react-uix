import React from "react";
import Paper from "../Paper";
import Row from "../Row";
import styled, { CSSProperties } from "styled-components";
import DropShadow from "../DropShadow";

export interface CardProps {
  backgroundColor?: string;
  children: React.ReactNode[];
  spanRow?: boolean;
  style?: CSSProperties;
  z?: number;
};

const Wrapper = styled.div`
  border-radius: 4px;
`;

const Card = ({ backgroundColor, children, spanRow = false, style: compStyle, z = 1 }: CardProps) => {
  const style: { [component: string]: CSSProperties } = {
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

export default Card;
