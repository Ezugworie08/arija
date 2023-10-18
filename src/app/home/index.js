// const camelCaseKeys = require('camelcase-keys');

const createQueries = require('./queries');
const createHandlers = require('./handlers');
const createRouter = require('./routes');

function createHome ({ db }) {
    const queries = createQueries({ db });
    const handlers = createHandlers({ queries });
    const router = createRouter({ handlers });

    return {
        handlers,
        queries,
        router
    };
}

module.exports = createHome;

