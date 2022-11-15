require("dotenv").config({
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: `Rails Girls Gathering Japan 2022`,
    description: `Rails Girls Gathering Japan 2022 は 12/3 (土) オンラインにて開催予定です`,
    author: `railsgirlsjapan`,
    image: "https://gathering.railsgirls.jp/static/ogimage-000a76464bd6d27200f100fa07a1b64d.png",
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
      resolve: 'gatsby-plugin-google-gtag',
      options: {
      trackingIds: ['G-PBJQEKD5GJ'],
      pluginConfig: {
      head: true,
        },
      },
      plugins: [`gatsby-plugin-react-helmet`],
      plugins: ['gatsby-plugin-breakpoints']
    },
    'gatsby-plugin-twitter',
    {
      resolve: "gatsby-plugin-firebase-v9.0",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        }
      }
    }
  ],
}
