const express = require("express");
const axios = require("axios").default;
const requestURL = require("./request");
const router = express.Router();

const url = "https://api.themoviedb.org/3";

const getMovies = async (fetch) => {
  try {
    const { data } = await axios.get(url + fetch);
    return data;
  } catch (error) {
    console.log(error);
  }
};

router.get("/fetchGenres", async (req, res) => {
  const data = await getMovies(requestURL.fetchGenres);
  res.send(data);
});

router.get("/fetchTrending", async (req, res) => {
  const data = await getMovies(requestURL.fetchTrending);
  res.send(data);
});

router.get("/fetchNetflixOriginal", async (req, res) => {
  const data = await getMovies(requestURL.fetchNetflixOriginal);
  res.send(data);
});

router.get("/fetchTopRated", async (req, res) => {
  const data = await getMovies(requestURL.fetchTopRated);
  res.send(data);
});
router.get("/fetchActionMovies", async (req, res) => {
  const data = await getMovies(requestURL.fetchActionMovies);
  res.send(data);
});

router.get("/fetchComedyMovies", async (req, res) => {
  const data = await getMovies(requestURL.fetchComedyMovies);
  res.send(data);
});

router.get("/fetchRomanceMovies", async (req, res) => {
  const data = await getMovies(requestURL.fetchRomanceMovies);
  res.send(data);
});

router.get("/fetchHorrerMovies", async (req, res) => {
  const data = await getMovies(requestURL.fetchHorrerMovies);
  res.send(data);
});

router.get("/fetchDocumentariesMovies", async (req, res) => {
  const data = await getMovies(requestURL.fetchDocumentariesMovies);
  res.send(data);
});

module.exports = router;
