module.exports = {
  siteMetadata: {
    title: `Rails Girls Gathering Japan 2022`,
    description: `Rails Girls Gathering Japan 2022 は 12/3 (土) オンラインにて開催予定です`,
    image: "images/ogimage.png",
    author: `railsgirlsjapan`,
    siteUrl: `https://gathering.railsgirls.jp/`,
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
      plugins: [`gatsby-plugin-react-helmet`],
      plugins: ['gatsby-plugin-breakpoints']
    },
  ],
}
