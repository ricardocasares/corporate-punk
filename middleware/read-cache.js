const fs = require('fs')
const log = require('debug')('punk:mw:cache:read')

module.exports = function(req, res, next) {
    fs.stat(req.img.cache, onRead(req, res, next))
}

function onRead(req, res, next) {
    return function(err, stats) {
        if (err) {
            log('cache not hit')
            return next()
        }
        
        log('cache hit', req.img.cache)
        fs.createReadStream(req.img.cache).pipe(res)
    }
}