// console.log("proces env", DB_PASSWORD);

module.exports = {
  development: {
    username: "bambu-runcing-petshop",
    password: "15jKFRQm3J2MMgtMR_Wyzw",
    database: "bambu-runcing-petshop",
    host: "dune-ox-6972.8nk.gcp-asia-southeast1.cockroachlabs.cloud",
    port: "26257",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username: "bambu-runcing-petshop",
    password: "15jKFRQm3J2MMgtMR_Wyzw",
    database: "bambu-runcing-petshop",
    host: "dune-ox-6972.8nk.gcp-asia-southeast1.cockroachlabs.cloud",
    port: "26257",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
};
