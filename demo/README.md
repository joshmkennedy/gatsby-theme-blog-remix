<p align="center">
  <a href="https://gatsby-theme-blog-demo.netlify.com">
    <img alt="Gatsby" src="https://gatsby-theme-blog-demo.netlify.com/icons/icon-512x512.png?v=a9f8ed11513d32c8a257faa8fb74dca4" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby blog theme <i>Remixed</i>
</h1>

A remix of the classic Gatsby Blog Theme. 
## Why this theme?

This theme took the tried and true Gatsby Theme Blog and added a splash of style and color. This theme does not do anything ground breaking but it is a great jumping off point. The theme's components are all easily shadowable, and have been themed by theme-ui to make the customization of easy as possible.

### Features
- Theme-ui
- Easy to shadow components
- Light and Darkmode
- MDX support
- Desktop and Mobile Navigation component
- Portals

## Installation

### Use the blog theme starter in a new site

This will generate a new site that pre-configures use of the blog theme.

```sh
gatsby new my-themed-blog https://github.com/joshatoutthink/gatsby-theme-blog-remix-demo
```

### Manually add to your site

```sh
npm install --save @joshkennedy00/gatsby-theme-blog-remix
```

## Usage

### Theme options

| Key           | Default value     | Description                                                                                               |
| ------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`               | Root url for all blog posts                                                                               |
| `contentPath` | `/content/posts`  | Location of blog posts                                                                                    |
| `assetPath`   | `/content/assets` | Location of assets                                                                                        |
| `mdx`         | `true`            | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```

### Additional configuration

#### Site Metadata
In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Gatsby Theme Remix`,
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
}
```

#### Images

this theme comes with the option to add:
- site logo
- author avatar

##### Site logo
Place a svg, jpg, or png named logo in the assets folder. There is also the option to add a darkmode version of the logo. To add this logo maker sure to name it logo-dark.

##### Author Avatar
Place a jpg, or png named avatar in the assets folder.



