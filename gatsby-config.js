module.exports = {
  siteMetadata: {
    title: 'Bkpate Gatsby Agency Starter',
    description: '',
    author: 'bkpatel.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            exportLocalsConvention: "asIs",
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/playground_assets`
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    ],
}