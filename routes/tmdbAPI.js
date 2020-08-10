const express = require("express");
const axios = require("axios").default;

const router = express.Router();

const url =
  "https://api.themoviedb.org/3/movie/550?api_key=1f534d1a12ce6db079be8b86e1f4ed79";

const getMovies = async () => {
  try {
    const response = await axios.get(url);
  } catch (error) {
    console.log(error);
  }
};

router.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(url);
    res.send(data);
  } catch (error) {
    console.log("error in fetching movies", error);
  }
});

module.exports = router;
