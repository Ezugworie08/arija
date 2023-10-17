const colors = require('colors/safe');

const packageJson = require('../package.json');


// TODO: Figure out how to ensure ENV vars are loaded in Node 20.6.0^

function requireFromEnv(key) {
    if (!process.env[key]) {
        console.error(`${colors.red('[APP ERROR] Missing env variable: ')} ${key}`);

        return process.exit(1);
    }

    return process.env[key];
}

module.exports = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt(requireFromEnv('PORT'), 10),
    version: packageJson.version
};
