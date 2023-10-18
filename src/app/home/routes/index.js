const express = require('express');

function createRouter ({ handlers }) {
    const router = express.Router();

    router.route('/').get(handlers.home);

    return router;
}

module.exports = createRouter;
