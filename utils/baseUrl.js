const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://codeverse-network-site.herokuapp.com";

module.exports = baseUrl;