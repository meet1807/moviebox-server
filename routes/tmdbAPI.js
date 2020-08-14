const express = require("express");
const axios = require("axios").default;
const requestURL = require("./request");
const router = express.Router();

const url = "https://api.themoviedb.org/3";

//creating middleware to request data from external API
function getMovies(fetch) {
  return async (req, res, next) => {
    try {
      const { data } = await axios.get(url + fetch);
      res.fetchedData = data;
      next();
    } catch (error) {
      console.log(error);
    }
  };
  // #NOTE: old code
  // try {
  //   const { data } = await axios.get(url + fetch);
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
}
// #NOTE: old code
// router.get("/fetchGenres", async (req, res) => {
//   const data = await getMovies(requestURL.fetchGenres);
//   res.send(data);
// });

router.get("/fetchGenres", getMovies(requestURL.fetchGenres), (req, res) => {
  res.send(res.fetchedData);
});

router.get(
  "/fetchTrending",
  getMovies(requestURL.fetchTrending),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchNetflixOriginal",
  getMovies(requestURL.fetchNetflixOriginal),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchTopRated",
  getMovies(requestURL.fetchTopRated),
  (req, res) => {
    res.send(res.fetchedData);
  }
);
router.get(
  "/fetchActionMovies",
  getMovies(requestURL.fetchActionMovies),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchComedyMovies",
  getMovies(requestURL.fetchComedyMovies),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchRomanceMovies",
  getMovies(requestURL.fetchRomanceMovies),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchHorrerMovies",
  getMovies(requestURL.fetchHorrerMovies),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchDocumentariesMovies",
  getMovies(requestURL.fetchDocumentariesMovies),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

router.get(
  "/fetchPopularTv",
  getMovies(requestURL.fetchPopularTv),
  (req, res) => {
    res.send(res.fetchedData);
  }
);

module.exports = router;
