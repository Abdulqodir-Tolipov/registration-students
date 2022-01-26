const router = require("express").Router()
const controller = require("../controllers/responce.js")

router.route('/registered')
    .get(controller.registered)

router.route('/warning')
    .get(controller.warning)


module.exports = router