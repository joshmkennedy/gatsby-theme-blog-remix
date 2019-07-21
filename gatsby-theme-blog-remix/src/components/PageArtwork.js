import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
/** @jsx jsx */
import { jsx } from "theme-ui";

const PageArtwork = () => {
  const data = useStaticQuery(graphql`
    query {
      top: file(
        absolutePath: { regex: "/graphic-top.(jpeg|jpg|gif|png|svg)/" }
      ) {
        publicURL
      }
      bottom: file(
        absolutePath: { regex: "/graphic-bottom.(jpeg|jpg|gif|png|svg)/" }
      ) {
        publicURL
      }
    }
  `);
  return (
    <>
      <img
        src={data.top.publicURL}
        alt='decorative'
        sx={{
          position: `absolute`,
          top: `10vh`,
          left: 0,
          width: `10vw`,
          height: `auto`,
          opacity: [0.3, 0.5, 1],
          zIndex: -1,
        }}
      />
      <img
        src={data.bottom.publicURL}
        alt='decorative'
        sx={{
          position: `absolute`,
          bottom: `10vh`,
          right: 0,
          width: `20vw`,
          height: `auto`,
          opacity: [0.3, 0.5, 1],
          zIndex: -1,
        }}
      />
    </>
  );
};

export default PageArtwork;
