import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

/* Shadow me if you want to change the logo name or need to customize further */
export default function LogoGraphic({ isDark }) {
  const data = useStaticQuery(graphql`
    query {
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

  /* if it is darkmode use a the dark mode logo if exists */
  return (
    <>
      {data.logo ? (
        <img
          src={data[!isDark && data.darkLogo ? "darkLogo" : "logo"].publicURL}
          alt='logo'
          css={{
            width: 24,
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
