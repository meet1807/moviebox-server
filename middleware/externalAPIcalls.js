const axios = require("axios").default;

const url = "https://api.themoviedb.org/3";

//creating middleware to request data from external API
function getMovies(fetch) {
  return async (req, res, next) => {
    try {
      const page = req.query.page;
      const { data } = await axios.get(
        url + fetch + `&page=${page ? page : 1}`
      );
      res.locals.fetchedData = data;
      next();
      //return res;
    } catch (error) {
      console.log("external calls" + error);
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

module.exports = getMovies;
