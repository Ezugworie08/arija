const createKnexClient = require('./knex-client');
const createHomeApp = require('./app/home');

function createConfig ({ env }) {
    // instantiate db connection
    const db = createKnexClient({
        connectionString: env.databaseUrl
    });

    // instantiate home app
    const homeApp = createHomeApp({ db });

    return {
        env,
        db,
        homeApp,
    };
}

module.exports = createConfig;
