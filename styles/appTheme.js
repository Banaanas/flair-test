/* - AppTheme -
 * This Theme is a JavaScript Object, in order to get the typing autocomplete/type
 * safety :
 * 1 - It contains the references to the CSS Variables ;
 * 2 - The theme also contains, among other values, the Media
 * Queries, because CSS Variables can NOT be used with Media Queries.
 * because CSS Variables can NOT be used with Media Queries;
 * 3 - It can be used as Emotion Theme also.
 *  */

// Breakpoints
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

// Queries
const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};

const appTheme = {
  colors: {
    primary: {
      darker: "var(--color-primary-darker)",
      dark: "var(--color-primary-dark)",
      default: "var(--color-primary-default)",
    },
    secondary: {
      darker: "var(--color-secondary-darker)",
      dark: "var(--color-secondary-dark)",
      default: "var(--color-secondary-default)",
      light: "var(--color-secondary-light)",
      lighter: "var(--color-secondary-lighter)",
    },
    black: "var(--color-black-default)",
    white: "var(--color-white-default)",
    textDefault: "var(--color-text-default)",
    selection: "var(--color-selection)",
    selectionBackground: "var(--color-selection-background)",
    gradient1: "var(--gradient-1)",
  },

  fontWeight: {
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
    bold: "var(--font-weight-bold)",
  },
  fontFamily: {
    gilroy: "var(--font-family-1)",
    alternativeFonts: "var(--alternative-fonts)",
  },

  /* OTHERS */
  globalMinWidth: "320px",
  globalMaxWidth: "1440px",
  queries: QUERIES,

  marginListItem: "16px",
};

export default appTheme;
