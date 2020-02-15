import React from 'react';
import PropTypes from 'prop-types';

const FlexBox = ({ alignItems, justifyContent, direction = "row", children, style: compStyle }) => {
  const style = {
    flexBox: {
      display: "flex",
      flexDirection: direction,
      alignItems,
      justifyContent
    }
  };

  Object.assign(style.flexBox, compStyle);
  return (
    <div style={style.flexBox}>{ children }</div>
  );
}

FlexBox.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
};

export default FlexBox;
