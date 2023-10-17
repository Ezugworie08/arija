const colors = require('colors/safe');

const { env, server, start } = require('../index');

server.on('error', (error) => {
    if (error.syscall !== 'listen') { throw error; }

    switch (error.code) {
        case 'EACCES':
            console.error(`${colors.red(`[SERVER ERROR] ${env.port} requires elevated privileges`)}`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${colors.red(`[SERVER ERROR] ${env.port} is already in use`)}`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

process.on('SIGINT', () => {
    console.info(`${colors.bgBlue(`Gracefully shutting down ${env.appName}`)}`);
    server.close(() =>{
        console.info(`${colors.bgBlue('Server closed')}`);
        process.exit(0);
    });
});


start();
