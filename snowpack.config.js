module.exports = {
  baseUrl: "./", // To match tsconfig.json
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
    server: "./server",
    store: "./src/store"
  },
};
