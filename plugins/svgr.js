module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options;
      const { svgrOptions, fileLoader = {}, assetPrefix } = nextConfig;

      const use = [
        {
          loader: require.resolve("@svgr/webpack"),
          options: svgrOptions || {},
        },
      ];

      const defaultOptions = {
        limit: 8192,
        publicPath: `${assetPrefix}/_next/static/chunks/svg/`,
        outputPath: `${isServer ? "../" : ""}static/chunks/svg/`,
        name: "[name]-[hash].[ext]",
      };

      use.push({
        loader: "file-loader",
        options: { ...defaultOptions, ...fileLoader },
      });

      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use,
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
