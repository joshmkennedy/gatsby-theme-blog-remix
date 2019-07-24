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

      <Container sx={{ maxWidth: `container` }}>
        <>
          <span
            sx={{
              position: `absolute`,
              top: `4vh`,
              right: [`40px`, `40px`, `0px`],
            }}
          >
            <DarkModeToggle isDark={isDark} toggleColorMode={toggleColorMode} />
          </span>

          {children}
        </>
      </Container>
    </Main>
  );
}
