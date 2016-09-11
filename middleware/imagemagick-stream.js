const magic = require('imagemagick-stream')
const log = require('debug')('punk:mw:imagemagick:stream')

module.exports = function(req, res, next) {
    let m = magic()
    let q = req.query

    if (q.scale) m.scale(q.scale)
    if (q.resize) m.resize(q.resize)
    if (q.crop) m.crop(q.crop)
    if (q.quality) m.quality(q.quality)
    
    log('creating imagemagick stream...')
    req.magic = m
    req.magic.on('error', err => next(new Error(err)))
    
    return next()
}