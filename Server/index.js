require("dotenv").config();
const cors = require("cors");
const express = require("express");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const app = express();
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PATCH, PUT, DELETE, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN STARTING");
});
app.get("/registration", (req, res) => {
  res.status(200).send("Welcome to Registration Page");
});

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
});
