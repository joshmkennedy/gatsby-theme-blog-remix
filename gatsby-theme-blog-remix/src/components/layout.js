import React from "react";
import { css, Global } from "@emotion/core";
import Image from "gatsby-image";
/** @jsx jsx */
import {
  Layout as StyledLayout,
  Header,
  Main,
  Container,
  useColorMode,
  jsx,
  Flex,
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
      logo: file(absolutePath: { regex: "/logo.(jpeg|jpg|gif|png|svg)/" }) {
        publicURL
      }
      darkLogo: file(
        absolutePath: { regex: "/logo-dark.(jpeg|jpg|gif|png|svg)/" }
      ) {
        publicURL
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
  console.log(data.darkLogo.publicURL);
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
        <span>
          <Link
            className='logo'
            to='/'
            sx={{
              textDecoration: "none",
              color: `background`,
            }}
          >
            {!isDark && data.darkLogo.publicURL ? (
              <img
                src={data.darkLogo.publicURL}
                alt='logo'
                css={{
                  width: 24,
                }}
              />
            ) : (
              <img
                src={data.logo.publicURL}
                alt='logo'
                css={{
                  width: 28,
                }}
              />
            )}
            {data.site.siteMetadata.title}
          </Link>
        </span>
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
