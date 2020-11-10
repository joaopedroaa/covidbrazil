const withPWA = require('next-pwa')

const prod = process.env.NODE_ENV === 'production'

const settings = {
  pwa: {
    disable: prod ? false : true,
    dest: 'public'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}

module.exports = withPWA(settings)

