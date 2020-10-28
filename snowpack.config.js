module.exports = {
  baseUrl: "./src", // To match tsconfig.json
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  alias: {
    common: "./src/common",
    store: "./src/store"
  },
};
