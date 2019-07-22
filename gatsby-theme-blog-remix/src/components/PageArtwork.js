import React from "react";
import { useStaticQuery, graphql } from "gatsby";
/** @jsx jsx */
import { jsx } from "theme-ui";

/* Shadow me to change, or remove the artwork   */

const PageArtwork = () => {
  const data = useStaticQuery(graphql`
    query {
      top: file(
        absolutePath: { regex: "/graphic-top.(jpeg|jpg|gif|png|svg)/" }
      ) {
        publicURL
      }
      bottom: file(
        absolutePath: { regex: "/graphic-CHANGE.(jpeg|jpg|gif|png|svg)/" }
      ) {
        publicURL
      }
    }
  `);
  return (
    <>
      {data.top ? (
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
      ) : (
        <svg
          sx={{
            position: `absolute`,
            top: `10vh`,
            left: 0,
            width: `10vw`,
            height: `auto`,
            opacity: [0.3, 0.5, 1],
            zIndex: -1,
          }}
          id='Layer_1'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 552 471'
        >
          <rect fill='#e0deff' width='316' height='265' />
          <rect fill='#f86278' x='236' y='206' width='316' height='265' />
        </svg>
      )}
      {data.bottom ? (
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
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1264 795'
          sx={{
            position: `absolute`,
            bottom: `10vh`,
            right: 0,
            width: `20vw`,
            height: `auto`,
            opacity: [0.3, 0.5, 1],
            zIndex: -1,
          }}
        >
          <rect fill='#fa9eac' x='632' width='316' height='265' />
          <rect fill='#e0deff' x='948' y='264' width='316' height='265' />
          <rect fill='#ffe69b' y='530' width='316' height='265' />
        </svg>
      )}
    </>
  );
};

export default PageArtwork;
