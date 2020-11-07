import React from 'react';
import HasStyle from '../types/HasStyle';

export interface ImageProps extends HasStyle {
  alt: string;
  src: string;
  height?: number | string;
  width?: number | string;
}

const Image = ({ alt, src, height, width, style: compStyle }: ImageProps) => {
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
};

export default Image;
