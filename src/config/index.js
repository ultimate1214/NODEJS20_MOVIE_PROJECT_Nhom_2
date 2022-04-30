const config = {
  AUTH: {
    SECRET_KEY: "movie-project",
  },
  SYSTEM: {
    PORT: 3000,
    HOST: "",
    DOMAIN: `http://localhost:${this.PORT}`,
  },
};

module.exports = config;
