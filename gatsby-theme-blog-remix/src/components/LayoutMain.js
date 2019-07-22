import React from "react";
/** @jsx jsx */
import { Main, Container, useColorMode, jsx } from "theme-ui";

import DarkModeToggle from "./DarkModeToggle";
import PageArtwork from "./PageArtwork";

/* Shadow Me if you need to change <Main>
  eg. if you dont need darkmode.  shadow this component and delete the <DarkModeToggle>
*/

export default function LayoutMain({ children }) {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };
  return (
    <Main>
      <PageArtwork
        css={{
          zIndex: -1,
        }}
      />
      <span
        sx={{
          position: `absolute`,
          top: `5vh`,
          right: `5vw`,
        }}
      >
        <DarkModeToggle isDark={isDark} toggleColorMode={toggleColorMode} />
      </span>
      <Container sx={{ maxWidth: `container` }}>{children}</Container>
    </Main>
  );
}
