const exp = require('express')
const mw = require('./middleware')
const log = require('debug')('punk')
const app = exp()
const index = require('serve-index')
const http = require('http')
const config = require('./config')
const argv = require('minimist')(process.argv.slice(2))
const normalize = require('./lib').normalizePort
const port = normalize(argv.port || config.port)

config.cache = argv.cache || config.cache
config.images = argv.images || config.images

app
    .set('port', port)
    .use('/', exp.static(__dirname + '/ui'))
    .use('/list', index(config.images, {icons: true}))
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

const server = http.createServer(app)

module.exports = server