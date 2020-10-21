module.exports = {
  siteMetadata: {
    title: 'mypat',
    description: 'mypat',
    author: 'mypat'
  },
  plugins: [    
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'MyNodes',
        imagePath: 'static'
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'user'
        ],
        queryLimit: 1000
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ]
}
