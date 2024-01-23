const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    config,
    options
  );

  singleSpaWebpackConfig.externals = [
    /^@rc-ses\/.+/
  ];

  singleSpaWebpackConfig.output.filename = 'rc-ses-self-service-provider-demo-angular-ui.js';

  return singleSpaWebpackConfig;
};
