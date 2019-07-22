import React from "react";
import { css } from "@emotion/core";
import Switch from "./switch";

import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

const checkedIcon = (
  <img
    alt='moon indicating dark mode'
    src={moon}
    width='16'
    height='16'
    role='presentation'
    css={{
      pointerEvents: `none`,
      margin: 4,
    }}
  />
);

const uncheckedIcon = (
  <img
    alt='sun indicating light mode'
    src={sun}
    width='16'
    height='16'
    role='presentation'
    css={{
      pointerEvents: `none`,
      margin: 4,
    }}
  />
);

export default function DarkModeToggle({ isDark, toggleColorMode }) {
  return (
    <Switch
      aria-label='Toggle dark mode'
      css={css({
        bg: `black`,
      })}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      checked={isDark}
      onChange={toggleColorMode}
    />
  );
}
