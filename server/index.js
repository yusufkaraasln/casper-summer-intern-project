const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");



app.use(express.json());

const db = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};
db(process.env.MONGO_URL);

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
