const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
})
