import { css, Global } from "@emotion/core";
/** @jsx jsx */
import { jsx } from "theme-ui";

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
      }
      h1,
      h2,
      h3 {
        font-weight: 900;
      }
      .logo {
        font-weight: 900;
        letter-spacing: 0.7px;
      }
    `}
  />
);
export default GlobalStyles;
