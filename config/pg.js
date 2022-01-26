require("dotenv").config()

module.exports = {
    HOST: process.env.PG_HOST,
    PORT: process.env.PG_PORT,
    USER: process.env.PG_USER,
    PASSWORD: process.env.PG_PASSWORD,
    DATABASE: process.env.PG_DATABASE
}