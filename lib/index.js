const log = require('debug')('punk:lib')
const extensions = new Set(['.jpg', '.jpeg', '.png', '.bmp', '.gif'])
const parse = require('path').parse
const stringify = qs => q => q.concat(qs[q])

exports.allowedExtensions = f => extensions.has(parse(f).ext)

exports.randomArrayItem = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

exports.normalizePort = function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) return val
    if (port >= 0) return port

    return false;
}

exports.encodeByQueryStrings = function(queries) {
    const encoded = new Buffer(Object
        .keys(queries)
        .map(stringify(queries))
        .toString())
        .toString('base64')
    
    log('encodeByQueryStrings:', encoded)
    
    return encoded
}
