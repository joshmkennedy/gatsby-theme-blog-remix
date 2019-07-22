import React from "react";
import { Link, useStaticQuery } from "gatsby";

/* Shadow me to change the Navigation Links */
export default function NavLinks({ styles }) {
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

  return (
    <ul css={styles}>
      <li key='about'>
        <Link to='/about'>about</Link>
      </li>
      {data.site.siteMetadata.social.map(({ name, url }) => (
        <li key={url}>
          <a href={url || `/`}>{name || `social siteMeta`}</a>
        </li>
      ))}
    </ul>
  );
}
