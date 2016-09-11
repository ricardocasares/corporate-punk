const read = require('fs').createReadStream
const log = require('debug')('punk:mw:image:read:stream')

module.exports = function(req, res, next) {
    log('creating read stream...')
    req.img.stream = read(req.img.original)
    
    return next()
}