const db = require("../utils/postgres.js")

const get = async () => {
    try {
        const GET_STUDENTS = `
            select 
                id,     
                firstname, 
                lastname, 
                email 
            from students 
            where status <> 'teacher'`
        const result = await db(false, GET_STUDENTS)
        return result
    } catch (error) {
        console.log(error); 
    }
}

module.exports = {
    get
}