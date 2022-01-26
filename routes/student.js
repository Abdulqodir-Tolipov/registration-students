const router = require("express").Router()
const controller = require("../controllers/student.js")

router.route('/students')
    .get(controller.GET)

module.exports = router