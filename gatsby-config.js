/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Test Gatsby site`,
    description: `A simple description about pandas eating lots...`,
    author: `gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WP",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wp",
        // Url to query from
        url: process.env.API_URL,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.API_URL_2,
        protocol: "http",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: false,

        verboseOutput: true,
        keepMediaSizes: true,

        includedRoutes: [
          "**/posts",
          "**/pages",
          "**/media",
          "**/categories",
          "**/taxonomies",
          "**/projects",
          "**/resources",
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
  ]
}
