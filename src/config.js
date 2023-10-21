const createKnexClient = require('./knex-client');
const createHomeApp = require('./app/home');
const createRecordViewingsApp = require('./app/record_viewings');

function createConfig ({ env }) {
    // instantiate db connection
    const db = createKnexClient({
        connectionString: env.databaseUrl
    });

    // instantiate home app
    const homeApp = createHomeApp({ db });

    // instantiate record viewings app
    const recordViewingsApp = createRecordViewingsApp({ db });

    return {
        env,
        db,
        homeApp,
        recordViewingsApp,
    };
}

module.exports = createConfig;
