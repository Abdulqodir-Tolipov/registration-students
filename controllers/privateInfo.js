const model = require("../repositories/privateInfo.js") 

const GET = async (req, res) => {
    res.render("login")
}

const POST = async (req, res) => {
    try {
        const data = await model(req.body)
        if (data) {
            res.redirect('/home')
        } else {
            res.redirect('/warning')
        }
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message,
            data: null,
          });
    }
}

module.exports = {
    GET,
    POST
}