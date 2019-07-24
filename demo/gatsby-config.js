/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Gatsby Blog Remix`,
    // Used to provide alt text for your avatar
    author: `Josh Kennedy`,
    //used in the post footer
    shortBio: `a web designer and developer.`,
    // Used for SEO
    description: `This is a remix of the theme Gatsby Theme Blog. Changed some styling, added some components, also made extra comments to make extending this theme easier`,
    // Used for social links in the root footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/JoshKen08672181`,
      },
      {
        name: `github`,
        url: `https://github.com/joshatoutthink`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@joshkennedy00/gatsby-theme-blog-remix",
      options: {
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Remix`,
        short_name: `remix`,
        start_url: `/`,
        background_color: `#F86278`,
        theme_color: `#F86278`,
        display: `standalone`,
        icon: `./content/assets/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
