const del = require('del')
const config = require('../config')
const deleted = paths => paths.length
const target = [`!${config.cache}/.gitignore`, `${config.cache}/*`]

module.exports = (req, res, next) => del
    (target)
    .then(deleted)
    .then(n => res.json({ status: 200, message: `deleted ${n} files`}))