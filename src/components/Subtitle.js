import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ children, style: compStyle, type = 1 }) => {
  const style = {
    subtitle: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0.15
    }
  };
  if (type === 2) {
    style.subtitle.fontSize = 14;
    style.subtitle.fontWeight = 500;
    style.subtitle.letterSpacing = 0.1;
  }
  Object.assign(style.subtitle, compStyle);
  return (
    <span style={style.subtitle}>{children}</span>
  );
}

Subtitle.propTypes = {
  children: PropTypes.string,
  type: PropTypes.number
};

export default Subtitle;
