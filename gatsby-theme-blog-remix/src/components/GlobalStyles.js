import { css, Global } from "@emotion/core";
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

/* if you need to set global styles, and can't or choose not to place them in the theme-ui this component would be a great one to shadow
 */
const GlobalStyles = () => {
  const { theme } = useThemeUI();
  const { heading } = theme.fonts;
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        pre {
          margin-bottom: 20px;
        }
        h1,
        h2,
        h3 {
          font-family: ${heading};
          font-weight: 900;
          margin: 30px;
        }
        .logo {
          font-weight: 900;
          letter-spacing: 0.7px;
        }
      `}
    />
  );
};
export default GlobalStyles;
