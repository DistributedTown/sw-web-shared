/**
 * This module is used at providing an easy way to override material-ui
 * `shadows` properties.
 * material-ui expects the shadows to be following a certain pattern.
 * (source: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js)
 * This file is a slight adaptation (for colours) of the above material-ui source file.
 *
 * This module exports a `createShadows(hexColor: string): Array<string>` method
 * that takes a hex color (presumably from the configuration) and returns an array
 * of the 25 possible shadows matching the 25 elevations in material-ui.
 *
 * It’s convoluted, but it’s the official way:
 *   https://github.com/mui-org/material-ui/issues/8780#issuecomment-338480079
 */

/**
 * Returns the {r, g, b} version of an hex color
 * Source: https://stackoverflow.com/a/5624139/4075255
 *
 * Exported for testing purposes only.
 */
export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const rawRgb = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rawRgb);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

const createShadow = (r, g, b, ...px) =>
  [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(${r},${g},${b},${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(${r},${g},${b},${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(${r},${g},${b},${shadowAmbientShadowOpacity})`,
  ].join(',');

/**
 * Takes a hex color (presumably from the configuration) and returns an array
 * of the 25 possible shadows matching the 25 elevations in material-ui.
 */
const createShadows = (hexColor: string) => {
  const rgbColor = hexToRgb(hexColor);
  const { r, g, b } = rgbColor;

  const shadows = [
    'none',
    `2px 2px 0px ${hexColor}`,
    // createShadow(r, g, b, 0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
    createShadow(r, g, b, 0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
    createShadow(r, g, b, 0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
    createShadow(r, g, b, 0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(r, g, b, 0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(r, g, b, 0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(r, g, b, 0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(r, g, b, 0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(r, g, b, 0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(r, g, b, 0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(r, g, b, 0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(r, g, b, 0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(r, g, b, 0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(r, g, b, 0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(r, g, b, 0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(r, g, b, 0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(r, g, b, 0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(r, g, b, 0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(r, g, b, 0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(r, g, b, 0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(r, g, b, 0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(r, g, b, 0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(r, g, b, 0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(r, g, b, 0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ];

  return shadows;
};

export default createShadows;
