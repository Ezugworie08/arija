const { v4 : uuid4 } = require('uuid');

function primeRequestContext (req, res, next) {
    req.context = {
        traceId: uuid4()
    };
    next();
}

module.exports = primeRequestContext;
