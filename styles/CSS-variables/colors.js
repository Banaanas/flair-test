import { css } from "@emotion/react";

const colors = css`
  /* Primary Color */
  --color-primary-darker: hsl(0, 31%, 37%);
  --color-primary-dark: hsl(0, 37%, 55%);
  --color-primary-default: hsl(0, 83%, 73%);
  --color-primary-light: hsl(0, 83%, 87%);
  --color-primary-lighter: hsl(0, 86%, 97%);
  --color-primary-lightest-1: hsl(0, 86%, 97%);
  --color-primary-lightest-2: hsl(0, 71%, 99%);

  /* Secondary Color */
  --color-secondary-darker: hsl(47, 29%, 38%);
  --color-secondary-dark: hsl(47, 40%, 57%);
  --color-secondary-default: hsl(47, 95%, 76%);
  --color-secondary-light: hsl(47, 93%, 88%);
  --color-secondary-lighter: hsl(47, 93%, 94%);
  --color-secondary-lightest-1: hsl(45, 100%, 98%);
  --color-secondary-lightest-2: hsl(50, 100%, 99%);

  /* Tertiary Color */
  --color-tertiary-darker: hsl(88, 10%, 45%);
  --color-tertiary-dark: hsl(87, 22%, 68%);
  --color-tertiary-default: hsl(87, 100%, 91%);
  --color-tertiary-light: hsl(87, 100%, 95%);
  --color-tertiary-lighter: hsl(85, 100%, 98%);
  --color-tertiary-lightest-1: hsl(84, 100%, 99%);
  --color-tertiary-lightest-2: hsl(90, 100%, 100%);

  /* Gray */
  --color-gray-darker: hsl(210, 4%, 40%);
  --color-gray-dark: hsl(210, 6%, 59%);
  --color-gray-default: hsl(212, 14%, 79%);
  --color-gray-light: hsl(210, 15%, 89%);
  --color-gray-lighter: hsl(220, 11%, 95%);
  --color-gray-lightest-1: hsl(240, 9%, 98%);
  --color-gray-lightest-2: hsl(240, 20%, 99%);

  /* Success Color */
  --color-success-darker: hsl(120, 53%, 25%);
  --color-success-dark: hsl(120, 53%, 49%);
  --color-success-default: hsl(120, 53%, 49%);
  --color-success-light: hsl(120, 53%, 49%);
  --color-success-lighter: hsl(120, 52%, 75%);
  --color-success-lightest-1: hsl(120, 51%, 87%);
  --color-success-lightest-2: hsl(120, 54%, 98%);

  /* Warning Color */
  --color-warning-darker: hsl(44, 80%, 27%);
  --color-warning-dark: hsl(44, 79%, 40%);
  --color-warning-default: hsl(44, 90%, 53%);
  --color-warning-light: hsl(44, 90%, 76%);
  --color-warning-lighter: hsl(44, 90%, 76%);
  --color-warning-lightest-1: hsl(44, 92%, 95%);
  --color-warning-lightest-2: hsl(49, 85%, 98%);

  /* Error Color */
  --color-error-darker: hsl(0, 62%, 29%);
  --color-error-dark: hsl(360, 63%, 44%);
  --color-error-default: hsl(360, 86%, 58%);
  --color-error-light: hsl(0, 85%, 79%);
  --color-error-lighter: hsl(0, 85%, 89%);
  --color-error-lightest-1: hsl(0, 82%, 96%);
  --color-error-lightest-2: hsl(0, 82%, 98%);

  /* Black */
  --color-black-default: hsla(216, 18%, 16%);

  /* White */
  --color-white-default: hsl(0, 0%, 100%);

  /* Text Color */
  --color-text-default: var(--color-black-default);

  /* Selection */
  --color-selection: var(--color-secondary-lightest-2);
  --color-selection-background: var(--color-primary-darker);

  /* Gradients */
  --gradient-1: linear-gradient(
    180deg,
    var(--color-primary-default) 0%,
    var(--color-secondary-default) 100%
  );
`;

export default colors;
