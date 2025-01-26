module.exports = ({ env }) => ({
  blurhash: {
    enabled: true,
    config: {
      regenerateOnUpdate: true,
      forceRegenerateOnUpdate: true,
      flatten: false,
      flattenColor: {
        r: 100,
        g: 150,
        b: 57,
      },
    },
  },
});
