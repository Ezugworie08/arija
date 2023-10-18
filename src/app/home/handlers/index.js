
function createHandlers ({ queries }) {
    function home (req, res, next ) {
        return queries
            .loadHomePage()
            .then(viewData => res.render('home/templates/home', viewData))
            .catch(next);
    }

    return {
        home
    };
}

module.exports = createHandlers;
