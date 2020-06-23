const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const apiRoutes = require("./routes/apiRoutes");

app.listen(PORT, function () {
  console.log(`server running on port ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("build"));

// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rings", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

// use apiRoutes
app.use("/api", apiRoutes);
// app.use("/api/encounters", )
app.use(apiRoutes);

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});
