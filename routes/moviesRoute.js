const controller = require("../controllers/moviesController")
const express = require ("express")
const router = express.Router();

router.get("/",controller.getMovies);
// router.get("/:rating",controller.getMoviesByRating);

module.exports = router;
