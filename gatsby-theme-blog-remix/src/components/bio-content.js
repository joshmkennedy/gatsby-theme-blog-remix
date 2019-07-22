import React, { Fragment } from "react";
import { Styled } from "theme-ui";

/**
 * Shadow me to add your own bio content
 * this pulls in siteMetadata set in your gatsby-config
 * see readme to see all options
 */

export default ({ socialURL, shortBio, author }) => {
  console.log(socialURL);
  return (
    <Fragment>
      Words by <Styled.a href={socialURL}>{author}</Styled.a>,
      <br />
      {shortBio}
    </Fragment>
  );
};
