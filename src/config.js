const createKnexClient = require('./knex-client');
const createPostgresClient = require('./postgres-client');
const createMessageStore = require('./message-store');

const createHomeApp = require('./app/home');
const createRecordViewingsApp = require('./app/record_viewings');

function createConfig ({ env }) {
    // instantiate knex client
    const knexClient = createKnexClient({ connectionString: env.databaseUrl });
    // instantiate postgres client
    const postgresClient = createPostgresClient({
        connectionString: env.messageStoreConnectionString
    });
    // instantiate message store
    const messageStore = createMessageStore({ db: postgresClient });

    // ---

    // instantiate home app
    const homeApp = createHomeApp({ db: knexClient });
    // instantiate record viewings app
    const recordViewingsApp = createRecordViewingsApp({ messageStore });

    return {
        env,
        db: knexClient,
        messageStore,
        //
        homeApp,
        recordViewingsApp,
    };
}

module.exports = createConfig;
