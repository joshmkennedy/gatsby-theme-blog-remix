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

/**
 * bio: pulls siteMetadata (from gatsby-config), and your avatar (from the assets folder)
 * make sure your avatar is named avatar or it will not be pulled in.
 * see readme for more information
 */

const Bio = () => {
  const data = useStaticQuery(bioQuery);
  const {
    site: {
      siteMetadata: { author, shortBio, social },
    },
    avatar,
  } = data;

  /**to be used in the author's name link currently the authors link pulls in their twitter profile*/
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
            height: 48,
            borderRadius: 99999,
            overflow: "hidden",
          })}
        >
          <img
            css={css({
              width: `100%`,
            })}
            src='https://api.adorable.io/avatars/285/abott@adorable.png'
            alt='presentation'
            role='presentation'
          />
        </div>
      )}
      <Styled.p>
        <BioContent
          author={author || `siteMetadata author`}
          shortBio={shortBio || `change in siteMetadata key shortBio`}
          socialURL={twitterInfo.url || `https://twitter.com/hashtag/jamstack`}
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
