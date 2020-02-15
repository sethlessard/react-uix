import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ children, height = "100%", resizable = false, width = "100%" }) => {
  const style = {
    container: {
      width,
      height,
      padding: "1rem"
    },
    textArea: {
      width: `100%`,
      height: `100%`
    }
  };

  if (!resizable) {
    style.textArea.resize = "none";
  }
  return (
    <div style={style.container}><textarea style={style.textArea}>{ children }</textarea></div>
  );
}

TextArea.propTypes = {
  children: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resizable: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TextArea;
