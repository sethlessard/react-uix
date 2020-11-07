import React from "react";
import styled from "styled-components";
import media, { ScreenType } from "../../style/media";
import HasChildren from "../../types/HasChildren";
import HasStyle from "../../types/HasStyle";

interface IHasColumns {
  numColumns: number;
}

const Wrapper = styled.div<IHasColumns>`
  float: left;
  padding-top: .5em;
  padding-bottom: .5em;
  padding-left: .25em;
  padding-right: .25em;
  width: calc(100% / ${props => props.numColumns} - 8px);

  ${media(ScreenType.Phone)`
    display: block;
    width: auto;
    padding-left: 0;
    padding-right: 0;
    float: none;
  `}
`;
const ItemLeft = styled(Wrapper)`
  padding-right: .5em;
  padding-left: 0;

  ${media(ScreenType.Phone)`
    padding-left: 0;
    padding-right: 0;
  `}
`;
const ItemRight = styled(Wrapper)`
  padding-left: .5em;
  padding-right: 0;

  ${media(ScreenType.Phone)`
    padding-left: 0;
    padding-right: 0;
  `}
`;

export interface GridItemProps extends IHasColumns, HasChildren, HasStyle {
  gridIndex: number;
}

const GridItem = ({ children, gridIndex, numColumns = 4, style: compStyle }: GridItemProps) => {
  const style = {
    GridItem: {}
  };
  Object.assign(style.GridItem, compStyle);
  if (gridIndex % numColumns === 0) {
    return (
      <ItemLeft numColumns={numColumns} style={style.GridItem}>{children}</ItemLeft>
    );
  } else if ((gridIndex + 1) % numColumns === 0) {
    return (
      <ItemRight numColumns={numColumns} style={style.GridItem}>{children}</ItemRight>
    );
  }
  return (
    <Wrapper numColumns={numColumns} style={style.GridItem}> {children} </Wrapper>
  );
};

export default GridItem;
