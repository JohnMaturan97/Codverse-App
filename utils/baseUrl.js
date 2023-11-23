const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://codeverse-app-ce8650759529.herokuapp.com";

module.exports = baseUrl;