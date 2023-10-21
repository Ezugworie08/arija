function mountRoutes(app, config) {
    app.use('/', config.homeApp.router);
    app.use('/record-viewing', config.recordViewing.router);
}

module.exports = mountRoutes;
