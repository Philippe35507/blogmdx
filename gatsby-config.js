module.exports= { 
  siteMetadata: {
    title: `Code Tahiche`,
    description: `Blog Tutoriels Web Developement`
  },
  plugins: [
  {
    resolve: 'gatsby-plugin-mdx',
    options:{
      extensions:[`.mdx`, `.md`]}},
  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/posts`,
      name: `posts`
    }
  }
  ]
}