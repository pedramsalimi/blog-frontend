module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { webpack } = options;

      config.plugins.push(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/) //TODO: add your lcoales here
      );

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
