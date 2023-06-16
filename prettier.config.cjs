module.exports = {
  plugins: [require.resolve('prettier-plugin-astro'), require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.cjs',
  pluginSearchDirs: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
