const router = require("express").Router()
const controller = require("../controllers/home.js")

router.route('/home')
    .get(controller.home)


module.exports = router