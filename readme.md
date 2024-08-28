# Cinema Backend Project

This project is a backend implementation for a cinema web application using Node.js and PostgreSQL. It aims to provide the necessary APIs and database functionality to support the frontend of the cinema application.

## Technologies Used

- Node.js: A JavaScript runtime environment that allows us to run JavaScript code outside of a web browser.
- PostgreSQL: A powerful open-source relational database management system.
- Express.js: A fast and minimalist web application framework for Node.js.
- Sequelize: A promise-based ORM (Object-Relational Mapping) for Node.js that supports multiple database systems, including PostgreSQL.

## Project Structure

The project follows a modular structure to ensure maintainability and scalability. Here is an overview of the main directories and files:

- `src/`: Contains the source code of the backend application.
    - `controllers/`: Contains the controllers responsible for handling incoming requests and generating appropriate responses.
    - `models/`: Contains the Sequelize models that define the database schema and handle interactions with the database.
    - `routes/`: Contains the route definitions for the different API endpoints.
    - `middlewares/`: Contains custom middleware functions used in the application.
    - `config/`: Contains configuration files for the database connection and other settings.
    - `index.js`: The entry point of the application.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/cinema-backend.git`
2. Install the dependencies: `npm install`
3. Set up the database connection in the `config/database.js` file.
4. Run the database migrations: `npx sequelize-cli db:migrate`
5. Start the server: `npm start`

## API Endpoints

The backend provides the following API endpoints:

- `/movies`: GET, POST, PUT, DELETE endpoints for managing movies.
- `/users`: GET, POST, PUT, DELETE endpoints for managing users.
- `/bookings`: GET, POST, PUT, DELETE endpoints for managing bookings.

For detailed information about the API endpoints and their usage, please refer to the API documentation.

## Conclusion

This backend project serves as the foundation for the cinema web application, providing the necessary APIs and database functionality. With Node.js and PostgreSQL, it offers a robust and scalable solution for managing movies, users, and bookings. Feel free to explore the code and customize it to fit your specific requirements.
