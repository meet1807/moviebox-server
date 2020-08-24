const express = require("express");

const getMovies = require("../middleware/externalAPIcalls");
const requestURL = require("./request");
const router = express.Router();

// #NOTE: old code
// router.get("/fetchGenres", async (req, res) => {
//   const data = await getMovies(requestURL.fetchGenres);
//   res.send(data);
// });

router.get("/fetchGenres", getMovies(requestURL.fetchGenres), (req, res) => {
  res.send(res.locals.fetchedData);
});

router.get(
  "/fetchTrending",
  getMovies(requestURL.fetchTrending),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.paginated);
  }
);

router.get(
  "/fetchNetflixOriginal",
  getMovies(requestURL.fetchNetflixOriginal),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.paginated);
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
  paginatedData(),
  (req, res) => {
    res.send(res.locals.fetchedData);
  }
);

router.get(
  "/fetchComedyMovies",
  getMovies(requestURL.fetchComedyMovies),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.fetchedData);
  }
);

router.get(
  "/fetchRomanceMovies",
  getMovies(requestURL.fetchRomanceMovies),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.fetchedData);
  }
);

router.get(
  "/fetchHorrerMovies",
  getMovies(requestURL.fetchHorrerMovies),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.fetchedData);
  }
);

router.get(
  "/fetchDocumentariesMovies",
  getMovies(requestURL.fetchDocumentariesMovies),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.fetchedData);
  }
);

router.get(
  "/fetchPopularTv",
  getMovies(requestURL.fetchPopularTv),
  paginatedData(),
  (req, res) => {
    res.send(res.locals.paginated);
  }
);

function paginatedData() {
  return (req, res, next) => {
    const data = res.locals.fetchedData;
    const limit = req.query ? req.query.limit : 20;
    data.results = data.results.slice(0, limit);
    // console.log(paginated)
    res.locals.paginated = data;
    next();
  };
}

module.exports = router;
