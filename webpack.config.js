const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add CSS loader for Tailwind
  config.module.rules.forEach((rule) => {
    if (typeof rule.test !== 'undefined' || typeof rule.oneOf === 'undefined') {
      return;
    }

    rule.oneOf.forEach((oneOfRule) => {
      if (oneOfRule.test && oneOfRule.test.toString().includes('css')) {
        if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
          oneOfRule.use.push({
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          });
        }
      }
    });
  });

  return config;
};
