import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, src, height, width, style: compStyle }) => {
  const style = {
    container: {
      height,
      width
    },
    img: {

    }
  };
  Object.assign(style.container, compStyle);
  return (
    <div style={style.container}>
      <img style={style.img} src={src} height={height} width={width} alt={alt} />
    </div>
  );
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Image;
