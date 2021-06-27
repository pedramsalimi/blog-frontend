const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withSvgr = require("./plugins/svgr");
const i18n = require("./i18n");
// const withMoment = require("./plugins/moment");

module.exports = withPlugins([[withBundleAnalyzer], [withSvgr]], {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: [],
  },
  i18n,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: [
          // This header informs browsers it should only be accessed using
          // HTTPS, instead of using HTTP. Using the configuration below,
          // all present and future subdomains will use HTTPS for a max-age
          // of 2 years This blocks access to pages or subdomains that can
          // only be served over HTTP.
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          //This header stops pages from loading when they detect reflected
          // cross-site scripting (XSS) attacks.
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // This header indicates whether the site should be allowed to be
          // displayed within an iframe. This can prevent against clickjacking
          // attacks.
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
});
