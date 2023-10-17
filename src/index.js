const http = require('http');

const createExpressApp = require('./app/express');
const createConfig = require('./config');
const env = require('./env');

const config = createConfig({ env });
const app = createExpressApp({ config, env });
const server = http.createServer(app);


function signalAppStart () {
    console.log(`${env.appName} started`);
    console.table([['Port', env.port], ['Environment', env.env]]);
}

function start () {
    server.listen(env.port, signalAppStart);
}

module.exports = {
    app,
    config,
    env,
    server,
    start
}
