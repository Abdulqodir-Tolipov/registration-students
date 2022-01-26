const db = require("../utils/postgres.js")
const md5 = require("md5")

module.exports = async ({firstname, lastname, password}) => {
    try {
        const GET_TEACHER = `
            select
                *
            from 
                students
            where firstname = $1 and lastname = $2 and password = $3 and status = 'teacher';
        `

        const result = await db(true, GET_TEACHER, firstname, lastname, md5(password))
        return result
    } catch (error) {
        throw error
    }
}

