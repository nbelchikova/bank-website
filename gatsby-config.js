module.exports = {
  siteMetadata: {
    title: `bank-website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
        'gatsby-plugin-postcss',
         "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};