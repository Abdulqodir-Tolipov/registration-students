const db = require("../utils/postgres.js")
const md5 = require("md5")

const post =  async ({firstname, lastname, email, password}) => {
    try {
        const ADD_STUDENT = `
            insert into students(firstname, lastname, email, password) values ($1, $2, $3, $4)
            returning *
        `

        const result = await db(true, ADD_STUDENT, firstname, lastname, email, md5(password))
        return result

    } catch (error) {
        throw error
    }
}

module.exports = {
    post
}