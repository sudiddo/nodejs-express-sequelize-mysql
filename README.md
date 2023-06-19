# Node.js Express Sequelize MySQL Project

This repository contains a Node.js application built with Express.js, Sequelize, and MySQL. The project aims to provide a basic structure and functionality for interacting with a MySQL database using an API.

## Features

- User authentication and authorization (TBD)
- CRUD operations for managing resources in the MySQL database
- Sequelize ORM for handling database interactions
- Express.js for building the API endpoints
- Error handling and validation (TBD)
- Logging using a logging library (TBD)
- API documentation using Swagger (TBD)

## Prerequisites

Before running the application, ensure that you have the following prerequisites installed on your machine:

- Node.js (version 14.18.0)
- MySQL server (version 8.0.33)

## Installation

1. Clone the repository to your local machine using the following command:

   ```
   git clone https://github.com/sudiddo/nodejs-express-sequelize-mysql.git
   ```

2. Navigate to the project directory:

   ```
   cd nodejs-express-sequelize-mysql
   ```

3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Configure the database connection by editing the `config/database.js` file. Update the host, port, username, password, and database name according to your MySQL server configuration.

5. Run the database migrations to create the necessary tables:

   ```
   npx sequelize-cli db:migrate
   ```

6. (Optional) If you want to seed the database with some initial data, run the following command:

   ```
   npx sequelize-cli db:seed:all
   ```

## Usage

To start the application, use the following command:

```
npm start
```

The application will be accessible at `http://localhost:8080`.

## Folder Structure

The project follows a standard folder structure to organize the codebase:

```
├── config/              # Configuration files
├── controllers/         # Request handlers
├── models/              # Sequelize models
├── routes/              # API routes
└── index.js             # Application entry point
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project doesn't have any license, it's my personal learning resource anyway
