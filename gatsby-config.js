/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Test Gatsby site`,
    description: `A simple description about pandas eating lots...`,
    author: `gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WP",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wp",
        // Url to query from
        url: "http://gatsby-wp.test/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ]
}
