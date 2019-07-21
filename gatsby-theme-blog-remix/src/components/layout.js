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
  useThemeUI,
  jsx,
  Flex,
} from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";

import Switch from "./switch";
import GlobalStyles from "./GlobalStyles";
import PageArtwork from "./PageArtwork";
import Navigation from "./Navigation";

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
          bg: `text`,
        }}
      >
        <div
          sx={{
            width: `container`,
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
          <Navigation />
        </div>
      </Header>
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
        <Container sx={{ maxWidth: `container` }}>{children}</Container>
      </Main>
    </StyledLayout>
  );
};

export default Layout;
