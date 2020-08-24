//const config = require("config");
const consoleDebug = require("debug")("app:console");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const tmdb = require("./routes/tmdbAPI");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression());

//Configuration

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  consoleDebug("Morgan enabled");
}

//API endpoint
app.use("/api/fetchMovies", tmdb);

//home route
app.get("/", (req, res) => {
  res.send("You are connected to MovieBox backend services ");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`connected to server on port: ${port}`));
