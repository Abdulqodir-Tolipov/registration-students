const model = require("../repositories/student.js")

const GET = async (req, res) => {
    const data = await model.get()
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(400).json({
            status: 400,
            message: 'not found!',
            data: null,
          });
    }
}

module.exports = {
    GET
}