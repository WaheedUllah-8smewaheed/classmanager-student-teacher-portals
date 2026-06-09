const Sequelize = require("sequelize");

const Connection = new Sequelize(
    process.env.DB_NAME || "classmanager",
    process.env.DB_USER || "root",
    process.env.DB_PASSWORD || "Pakistan@321#$",
    {
        host: process.env.DB_HOST || "127.0.0.1",
        port: 3306,
        dialect: "mysql",
        timezone: "+05:00"
    }
);

module.exports = Connection;
