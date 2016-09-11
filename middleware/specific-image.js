const parse = require('path').parse

module.exports = function(req, res, next) {
    if (!req.query.image) return next()

    let { name, ext } = parse(req.query.image)

    req.img = {}
    req.img.ext = ext
    req.img.name = name

    return next()
}