const pool = require("../db");

const getMovies = async (req, res) => {
  try {
    const { category, rating } = req.query;
    const client = await pool.connect();
    let query;

    if (category) {
      query = `
        SELECT f.title, f.description, f.release_year, c.name 
        FROM film f 
        JOIN film_category fc ON f.film_id = fc.film_id 
        JOIN category c ON c.category_id = fc.category_id 
        WHERE c.name = '${category}'`;
    } else if (rating) {
      query = `
        SELECT title, description, release_year 
        FROM film 
        WHERE rating = '${rating}'`;
    } else {
      return res.status(400).send("Please provide a category or rating.");
    }

    const movies = await client.query(query);
    res.send(movies.rows);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
};

module.exports = {
  getMovies,
};
