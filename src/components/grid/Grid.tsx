import React, { ReactNode } from "react";
import _ from "lodash";
import styled from "styled-components";
import Row from "../Row";
import GridItem from "./GridItem";
import ReactChildren from "../../types/ReactChildren";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

export interface GridProps extends HasChildren, HasStyle {
  columns: number;
};

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
`;

/**
 * Render the grid items.
 * @param children the grid items.
 * @param numColumns the number of columns in the grid.
 */
const renderGridItems = (children: ReactChildren, numColumns: number) => {
  // split the child GridItems into groups of size <numColumns>
  const splitChildren = (Array.isArray(children)) ? _.chunk(children, numColumns) : [[children]];
  const rows: ReactNode[] = [];
  splitChildren.forEach((childArray, index, _) => {
    const rowKey = `grid-row-${index}`;
    rows.push((
      <Row key={`grid-row-${index}`}>
        {
          childArray.map((child, childIndex, _) => {
            return <GridItem key={`grid-item-${childIndex}-${rowKey}`} gridIndex={childIndex} numColumns={numColumns}>{child}</GridItem>;
          })
        }
      </Row>
    ));
  });
  return rows;
};

const Grid = ({ children, columns = 4, style: compStyle }: GridProps) => {
  const style = {
    Grid: {}
  };
  Object.assign(style.Grid, compStyle);
  return (
    <Wrapper style={style.Grid}>
      {renderGridItems(children, columns)}
    </Wrapper>
  );
};

export default Grid;
