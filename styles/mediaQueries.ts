import { css } from 'styled-components';

// In px:
export const querySizes = {
  largeScreen: 1280,
  largerScreen: 1824,
  largestScreen: 1920,
  tablet: 1024,
  bigPhone: 840,
  phone: 800,
  smallPhone: 480,
  smallerPhone: 360,
};

export const queryAbove = (breakpoint, providedCss) => css`
  @media screen and (min-width: ${querySizes[breakpoint] + 1}px) {
    ${providedCss}
  }
`;

export const queryBelow = (breakpoint, providedCss) => css`
  @media screen and (max-width: ${querySizes[breakpoint]}px) {
    ${providedCss}
  }
`;

export const queryBetween = (max, min, providedCss) => css`
  @media screen and (max-width: ${querySizes[
      max
    ]}px) and (min-width: ${querySizes[min]}px) {
    ${providedCss}
  }
`;
