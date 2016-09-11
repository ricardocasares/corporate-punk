module.exports = function(err, req, res, next) {
    let error = {
        status: err.status || 500,
        name: err.name || 'ApplicationError',
        message: err.message || 'Internal Server Error'
    }
  
    if (process.env.NODE_ENV === 'development') {
        error.stack = err.stack
    }
    
    res
        .status(error.status)
        .json(error)
}