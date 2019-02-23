module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    NODE_ENV: process.env.NODE_ENV
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    CMS_URL: process.env.CMS_URL
  }
};
