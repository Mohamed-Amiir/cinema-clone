const controller = require("../controllers/moviesController")
const express = require ("express")
const router = express.Router();


router.get("/viral",controller.getViralMovies);
router.get("/",controller.getMovies);
router.get("/search",controller.searchMovies);


module.exports = router;
