const { join } = require("path");
require("dotenv").config({ path: join(__dirname, "../.env") });
const db = require("./models");
const express = require("express");
const cors = require("cors");
const {
  authRouters,
  categoryRouters,
  productsRouters,
  cartRouters,
  transactionRouters,
  transactionHeaderRouters,
  adminRouters,
  userRouters,
} = require("./routers");

const PORT = process.env.PORT || 8000;

const app = express();

// app.use(
//   cors({
//     origin: [
//       process.env.WHITELISTED_DOMAIN &&
//         process.env.WHITELISTED_DOMAIN.split(","),
//     ],
//   })
// );

app.use(cors());
app.use(express.json());

app.use("/static", express.static(join(__dirname, "..", "public")));
// app.use("/api", authorize);

app.use("/api/auth", authRouters);
app.use("/category", categoryRouters);
app.use("/api/products", productsRouters);
app.use("/api/cart", cartRouters);
app.use("/api/transaction", transactionRouters);
app.use("/api/transaction-header", transactionHeaderRouters);
app.use("/api/admin", adminRouters);
app.use("/api/user", userRouters);

//#region API ROUTES
// app.use("/auth", authRouters);

// ===========================
// NOTE : Add your routes here

app.get("/api", (req, res) => {
  res.send("Hello, this is my API");
});

app.get("/api/greetings", (req, res, next) => {
  res.status(200).json({
    message: "Hello, Student !",
  });
});

// ===========================

// not found
app.use((req, res, next) => {
  if (req.path.includes("/api/")) {
    res.status(404).send("Not found !");
  } else {
    next();
  }
});

// error
app.use((err, req, res, next) => {
  if (req.path.includes("/api/")) {
    console.error("Error : ", err.stack);
    res.status(500).send("Error !");
  } else {
    next();
  }
});

//#endregion

//#region CLIENT
// const clientPath = "../../client/build";
// app.use(express.static(join(__dirname, clientPath)));

// // Serve the HTML page
// app.get("*", (req, res) => {
//   res.sendFile(join(__dirname, clientPath, "index.html"));
// });

// db.connect((err) => {
//   if (err) return console.log(err);
//   console.log("Success connect to mysql");
// });

// db.connect((err) => {
//   if (err) return console.log(err);
//   console.log("Success connect to mysql");
// });

//#endregion

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    // db.sequelize.sync({ alter: true });
    console.log(`APP RUNNING at ${PORT} ✅`);
  }
});