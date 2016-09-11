const join = require('path').join
const assign = Object.assign
const config = require('../config')
const log = require('debug')('punk:mw:set:paths')
const encode = require('../lib').encodeByQueryStrings

module.exports = function(req, res, next) {
    let img = req.img
    let file = img.name.concat(img.ext)
    let query = req.query
    
    img.original = join(config.images, file)
    img.cache = join(config.cache, encode(assign({}, img, query)))
    
    log('paths set!')
    return next();
}