const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const moviesRoute = require("./routes/moviesRoute");
app.use(bodyParser.json());
app.use("/movies", moviesRoute);

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
