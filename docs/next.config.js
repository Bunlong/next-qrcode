module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' }
    }
  }
}
