const fs = require('fs')
const log = require('debug')('punk:mw:check:exists')

module.exports = function(req, res, next) {
    if (!req.query.image) return next()

    fs.stat(req.img.original, onRead(next))
}

function onRead(next) {
    return function(err, stats) {
        if (err) {
            return next(new Error('Image does not exists.', 404))
        }
        
        log('image exists')

        return next()
    }
}