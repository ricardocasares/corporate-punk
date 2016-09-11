module.exports = (req, res) => req
    .img.stream
    .pipe(req.magic)
    .pipe(res)