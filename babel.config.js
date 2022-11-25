module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/components': './src/components',
            '@/services': './src/services',
            '@/assets': './src/assets',
            '@/utils': './src/utils',
            '@/types': './src/types',
          },
        },
      ],
    ],
  };
};
