import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
/** @jsx jsx */
import { useThemeUI, jsx } from "theme-ui";
import { Link, useStaticQuery, qraphql } from "gatsby";

import ModalIcon from "./elements/ModalIcon";
import Toggle from "./elements/Toggle";
import Modal from "./elements/Modal";

export default function Navigation() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `);

  //gets access to the theme object from theme-ui
  const context = useThemeUI();
  const { theme } = context;
  const { primary, background } = theme.colors;

  return (
    <>
      <nav
        sx={{
          display: ["none", "block"],
          color: `background`,
        }}
      >
        <NavLinks linkColor={background}>
          <li key='about'>
            <Link to='/about'>about</Link>
          </li>
          {data.site.siteMetadata.social.map(({ name, url }) => (
            <li key={url}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </NavLinks>
      </nav>
      <Toggle>
        {({ toggle, on }) => (
          <>
            <button
              sx={{
                display: ["block", "none"],
              }}
              css={{ background: "transparent", border: "none" }}
              onClick={toggle}
            >
              <ModalIcon color={primary} />
            </button>
            {on && (
              <Modal iconColor={primary} toggle={toggle}>
                <MobileNav
                  linkColor={theme.colors.primary}
                  sx={{
                    fontFamily: `heading`,
                    color: `primary`,
                  }}
                >
                  <li key='about'>
                    <Link to='/about'>about</Link>
                  </li>
                  {data.site.siteMetadata.social.map(({ name, url }) => (
                    <li key={url}>
                      <a href={url}>{name}</a>
                    </li>
                  ))}
                </MobileNav>
              </Modal>
            )}
          </>
        )}
      </Toggle>
    </>
  );
}
const MobileNav = styled.ul`
  li {
    a {
      color: ${props => props.linkColor};
      text-decoration: none;
    }
    list-style: none;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
`;
const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    a {
      text-decoration: none;
      color: ${props => props.linkColor};
    }
    list-style: none;
    margin-left: 20px;
  }
`;
