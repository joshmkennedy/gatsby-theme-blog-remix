import React from "react";
/** @jsx jsx */
import { Header, useColorMode, jsx } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import LogoGraphic from "./LogoGraphic";
import Navigation from "./Navigation";

/* Shadow Me if you need to change <Header> Layout
  eg. if you dont need a logo by the site title.  shadow this component and delete the <Logo>
*/
export default function LayoutHeader() {
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

  return (
    <Header
      sx={{
        bg: `text`,
      }}
    >
      <div
        sx={{
          mx: `auto`,
          px: [`20px`, `40px`, `0px`],
          width: `100%`,
          maxWidth: `container`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          <LogoGraphic isDark={isDark} />
          {data.site.siteMetadata.title}
        </Link>
        <Navigation />
      </div>
    </Header>
  );
}
