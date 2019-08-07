import React from "react";
import { Link } from "gatsby";
import { css, Styled, Flex } from "theme-ui";

import Bio from "../components/bio";

/* shows on the post singles
displays an avatar image and pulls in some siteMetadata
 */

const Footer = ({ previous, next }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    <Styled.hr />
    <Bio />
    {(previous || next) && (
      <Flex
        as='ul'
        css={{
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          <Styled.root>
            {previous && (
              <Styled.a as={Link} to={previous.node.slug} rel='prev'>
                ← {previous.node.title}
              </Styled.a>
            )}
          </Styled.root>
        </li>
        <li>
          <Styled.root>
            {next && (
              <Styled.a as={Link} to={next.node.slug} rel='next'>
                {next.node.title} →
              </Styled.a>
            )}
          </Styled.root>
        </li>
      </Flex>
    )}
  </footer>
);

export default Footer;
