const log = require('debug')('punk:mw:cache:write')
const write = require('fs').createWriteStream
const encodeByQueryStrings = require('../lib').encodeByQueryStrings

module.exports = function(req, res, next) {
    log('writing cache file:', req.img.cache)
    
    req.magic.pipe(write(req.img.cache))

    next();
}