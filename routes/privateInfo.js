const router = require("express").Router()
const controller = require("../controllers/privateInfo.js")

router.route('/private')
    .get(controller.GET)
    .post(controller.POST)


module.exports = router