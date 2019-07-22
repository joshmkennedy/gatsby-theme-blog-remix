import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
/** @jsx jsx */
import { useThemeUI, jsx, useColorMode } from "theme-ui";

import Icon from "./elements/Icon";
import Toggle from "./elements/Toggle";
import Modal from "./elements/Modal";
import NavLinks from "./NavLinks";

/* shadow me if you need to change the layout of the desktop navigation and mobile navigation  */
/* to change the nagigation Links shadow NagigationLinks component */

export default function Navigation() {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  //gets access to the theme object from theme-ui
  const context = useThemeUI();
  const { theme } = context;
  const { primary, background } = theme.colors;
  const breakpoint = theme.breakpoints[0];
  //styles for the navigation
  const styles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      a {
        font-family: ${theme.fonts.heading};
        text-decoration: none;
        color: ${isDark ? primary : background};
      }
      list-style: none;
      margin-left: 20px;
    }
    @media (max-width: ${breakpoint}) {
      flex-direction: column;
      align-items: start;
      li {
        a {
          color: ${primary};
          text-decoration: none;
        }
        list-style: none;
        margin-bottom: 2rem;
        font-size: 2.5rem;
      }
    }
  `;

  return (
    <>
      <nav
        sx={{
          display: ["none", "block"],
          color: `background`,
        }}
      >
        <NavLinks linkColor={background} styles={styles} />
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
              <Icon color={primary} name='mobile' />
            </button>
            {on && (
              <Modal iconColor={primary} toggle={toggle}>
                <nav>
                  <NavLinks linkColor={theme.colors.primary} styles={styles} />
                </nav>
              </Modal>
            )}
          </>
        )}
      </Toggle>
    </>
  );
}
