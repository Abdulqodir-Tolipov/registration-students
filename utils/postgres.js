const pg = require("pg")
const pgConfig = require("../config/pg.js")

const poll = new pg.Pool({
    host: pgConfig.HOST,
    port: pgConfig.PORT,
    user: pgConfig.USER,
    password: pgConfig.PASSWORD,
    database: pgConfig.DATABASE,
})

const pgFn = async (isOneRow, query, ...args) => {
    const client = await poll.connect()
    try {
        const data = (await client.query(query, args)).rows;
        return isOneRow ? data[0] : data
    } catch (error) {
        throw new Error(error.message)
    } finally {
        await client.release();
    }
}

module.exports = pgFn