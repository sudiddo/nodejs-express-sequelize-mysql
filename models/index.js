const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;

// Sequelize is a library for Node.js that makes it easier to work with databases. It helps you interact with your database using JavaScript code instead of writing complex SQL queries.
//
// The db object is initialized with Sequelize instance and Sequelize library imported from Sequelize package. The db object will be used in server.js.
//
// The db object is exported via module.exports = db; so that it can be imported in other parts of the application with the help of require.
//
// The db object contains Sequelize and sequelize instances along with Tutorial model.
//
// Sequelize: Sequelize instance initialized with connection URI of the database.
// sequelize: Sequelize instance initialized with connection URI of the database.
// Tutorial: The tutorial.model.js file will contain Sequelize model definition for Tutorial model. It will be used to create Tutorial table in the database and also to build CRUD APIs.
// Sequelize library is initialized with connection URI of the database. Sequelize constructor is called with connection URI of the database as the first argument and an object containing Sequelize options as the second argument.
//
// Sequelize options object contains pool object which is used to configure Sequelize connection pool:
//
// max: maximum number of connection in pool
// min: minimum number of connection in pool
// idle: maximum time, in milliseconds, that a connection can be idle before being released
// acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
// Sequelize options object also contains operatorsAliases object which is used to configure aliases for operators. We will set it to false to remove string aliases.
//
// what is pool in Sequelize?
//
// pool in sequelize is used to configure Sequelize connection pool:
