import { css } from "@emotion/react";

const colors = css`
  /* Primary Color */
  --color-primary-darker: #203c86;
  --color-primary-dark: #1388c9;
  --color-primary-default: #95bcf2;

  /* Secondary Color */
  --color-secondary-darker: #7a7e92;
  --color-secondary-dark: #cfd1e3;
  --color-secondary-default: #e7e8f2;
  --color-secondary-light: #f2f3f8;

  /* Black */
  --color-black-default: #1f2643;

  /* White */
  --color-white-default: #ffffff;

  /* Text Color */
  --color-text-default: var(--color-black-default);

  /* Selection */
  --color-selection: var(--color-white-default);
  --color-selection-background: var(--color-primary-default);

  /* Gradients */
  --gradient-1: linear-gradient(
    360deg,
    rgba(99, 39, 39, 0.0035) 0%,
    rgba(37, 67, 136, 0.1) 52.16%,
    rgba(107, 180, 221, 0) 92.38%
  );
`;

export default colors;
