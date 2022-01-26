
const registered = (req, res) => {
    res.render("responce")
}

const warning = (req, res) => {
    res.render("warning")
}

module.exports = {
    registered,
    warning
}