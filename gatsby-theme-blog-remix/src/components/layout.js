import React from "react";
import { css, Global } from "@emotion/core";
/** @jsx jsx */
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  useColorMode,
  jsx,
} from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

import Switch from "./switch";
import { pipeFromArray } from "../../../../../../Library/Caches/typescript/3.5/node_modules/rxjs/internal/util/pipe";
import GlobalStyles from "./GlobalStyles";

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

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //stuff for the swictch color modes
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };
  //return the opposite of the color mode

  return (
    <StyledLayout>
      <GlobalStyles />
      <Header
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bg: `text`,
        }}
      >
        <Link
          className='logo'
          to='/'
          sx={{
            textDecoration: "none",
            color: `background`,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
        <span>
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
        </span>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </StyledLayout>
  );
};

export default Layout;
