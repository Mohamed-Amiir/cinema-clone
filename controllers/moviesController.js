const pool = require("../db");

const getMovies = async (req, res) => {
  try {
    const { category, rating, language } = req.query;
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
        SELECT title, description, release_year ,STRING_AGG(a.first_name || ' ' || a.last_name, ', ') AS actors
      FROM film f
      JOIN 
    film_actor fa ON f.film_id = fa.film_id
      JOIN 
    actor a ON fa.actor_id = a.actor_id
        WHERE rating = '${rating}'
    GROUP BY 
    f.title, f.description, f.release_year;`;
    } else if (language) {
      //instead of getting the languge id from the database, we will assign it using map
      //we will get the language name from the user and search for it in the map
      //if the language is found, we will assign the id to the language variable
      //if the language is not found, we will return an error message
      const languageMap = {
        English: 1,
        Italian: 2,
        Japanese: 3,
        Mandarin: 4,
        French: 5,
      };

      query = `
      SELECT title, description, release_year ,STRING_AGG(a.first_name || ' ' || a.last_name, ', ') AS actors
      FROM film f
      JOIN 
    film_actor fa ON f.film_id = fa.film_id
      JOIN 
    actor a ON fa.actor_id = a.actor_id
      WHERE language_id = '${languageMap[language]}'
      GROUP BY 
    f.title, f.description, f.release_year;`;
    } else {
      return res.status(400).send("Please provide a category or rating.");
    }

    const movies = await client.query(query);
    res.send(movies.rows);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
};

const searchMovies = async (req, res) => {
  try {
    //get the search query from the request using movie_title
    const { keyword } = req.query;
    //connect to the database
    const client = await pool.connect();
    //query the database for the movie
    const movies = await client.query(`
          SELECT f.title,f.description,f.release_year, STRING_AGG(a.first_name || ' ' || a.last_name, ', ') AS actors
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE f.title ILIKE '%${keyword}%'
GROUP BY f.title, f.description, f.release_year;
          `);
    //send the response
    res.send(movies.rows);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
};

const getViralMovies = async (req, res) => {
  try {
    const client = await pool.connect();
    const movies = await client.query(`
    SELECT f.title, f.description, f.release_year, STRING_AGG(a.first_name || ' ' || a.last_name, ', ') AS actors
    FROM film f
    JOIN film_actor fa ON f.film_id = fa.film_id
    JOIN actor a ON fa.actor_id = a.actor_id
    WHERE f.rental_duration = 7
    GROUP BY f.title, f.description, f.release_year;
    `);
    res.send(movies.rows);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
}

module.exports = {
  getMovies,
  searchMovies,
  getViralMovies
};
