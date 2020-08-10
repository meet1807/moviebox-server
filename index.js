const express = require("express");
const tmdb = require("./routes/tmdbAPI");
const app = express();

app.use(express.json());
app.use("/api/fetchMovies", tmdb);

//home route
app.get("/", (req, res) => {
  res.send("You are connected to MovieBox backend services ");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`connected to server on port: ${port}`));
