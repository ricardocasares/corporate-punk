const fs = require('fs')
const parse = require('path').parse
const config = require('../config')
const random = require('../lib').randomArrayItem
const allowed = require('../lib').allowedExtensions
const log = require('debug')('punk:mw:random:image')

module.exports = function(req, res, next) {
    if (req.query.image) return next()
    
    log('selecting random image...')
    fs.readdir(config.images, onRead(req, next))
}

function onRead(req, next) {
    return function(err, files) {
        if (err) return next(new Error(err))

        files = files.filter(allowed)
        if (!files.length) return next(new Error('Put some images.'))
        
        let { name, ext } = parse(random(files))
        
        req.img = {}
        req.img.ext = ext
        req.img.name = name

        return next()
    }
}