const withMDX = require('@next/mdx')()

module.exports = withMDX({
  images: {
    loader: 'imgix'
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
})