const model = require("../repositories/register.js")

const GET = async (req, res) => {
    res.render("register")
}

const POST = async (req, res) => {
    try {
        const data =  await model.post(req.body)
        if (data) {
            res.redirect('/registered');
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