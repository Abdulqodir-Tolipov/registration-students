const router = require("express").Router()
const controller = require("../controllers/register.js")

router.route('/')
    .get(controller.GET)
    .post(controller.POST)

module.exports = router