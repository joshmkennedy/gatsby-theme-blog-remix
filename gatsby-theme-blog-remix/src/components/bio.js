/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Styled, css, Flex } from "theme-ui";
import BioContent from "./bio-content.js";

const Bio = () => {
  const data = useStaticQuery(bioQuery);
  const {
    site: {
      siteMetadata: { author, shortBio, social },
    },
    avatar,
  } = data;

  //pulls our just the twitter info so we can use it in our short bio
  //shadow this component to change
  const twitterInfo = social.reduce(obj =>
    obj.name === "twitter" ? obj : null
  );

  return (
    <Flex css={css({ mb: 4 })}>
      {avatar ? (
        <Image
          fixed={avatar.childImageSharp.fixed}
          alt={author}
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            borderRadius: 99999,
          })}
        />
      ) : (
        <div
          css={css({
            mr: 2,
            mb: 0,
            width: 48,
            borderRadius: 99999,
          })}
          role='presentation'
        />
      )}
      <Styled.p>
        <BioContent
          author={author}
          shortBio={shortBio}
          socialURL={twitterInfo.url}
        />
      </Styled.p>
    </Flex>
  );
};

const bioQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        shortBio
        social {
          name
          url
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Bio;
