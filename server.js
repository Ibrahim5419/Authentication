const express = require("express");
const urlencoded = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes.js");
const cookieParser = require("cookie-parser");
dotenv.config();
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server running at port:${port}`);
});
