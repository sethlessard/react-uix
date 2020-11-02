import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "../../style/media";

const Wrapper = styled.div`
  float: left;
  padding-top: .5em;
  padding-bottom: .5em;
  padding-left: .25em;
  padding-right: .25em;
  width: calc(100% / ${props => props.numColumns} - 8px);

  ${media.phone`
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

  ${media.phone`
    padding-left: 0;
    padding-right: 0;
  `}
`;
const ItemRight = styled(Wrapper)`
  padding-left: .5em;
  padding-right: 0;

  ${media.phone`
    padding-left: 0;
    padding-right: 0;
  `}
`;

const GridItem = ({ children, gridIndex, numColumns = 4, style: compStyle }) => {
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

GridItem.propTypes = {
  gridIndex: PropTypes.number.isRequired,
  numColumns: PropTypes.number.isRequired
};

export default GridItem;
