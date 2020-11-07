import { css, CSSObject } from "styled-components";

export enum ScreenType {
  Phone = 420,
  Tablet = 768,
  Desktop = 992,
  Giant = 1170
};

/**
 * Returns css for a specific screen type.
 * @param screenType the screen type.
 */
export function media<T extends object>(screenType: ScreenType) {
  const emSize = _getEmSize(screenType);
  return (style: CSSObject | TemplateStringsArray) => css<T>`@media(max-width: ${emSize}em) { ${css<T>(style)} }`;
};

/**
 * Get the EM size for a specific screen type.
 * @param screenType the screen type.
 */
const _getEmSize = (screenType: ScreenType) => {
  return screenType.valueOf() / 16;
};

export default media;