const exp = require('express')
const mw = require('./middleware')
const log = require('debug')('punk')
const app = exp()

app
    .use('/', exp.static('ui'))
    .get('/hold',
        mw.randomImage,
        mw.specificImage,
        mw.setPaths,
        mw.readCache,
        mw.checkExists,
        mw.imageReadStream,
        mw.imageMagickStream,
        mw.writeCache,
        mw.streamResponse)
    .get('/cache/clear', mw.clearCache)
    .use(mw.errorHandler)

module.exports = app