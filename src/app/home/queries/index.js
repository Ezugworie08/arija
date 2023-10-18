
function createQueries ({ db }) {
    function loadHomePage () {
        return db.then(client =>
            client('videos')
                .sum('view_count as videosWatched')
                .then(rows => rows[0])
        )
    }

    return {
        loadHomePage
    };
}

module.exports = createQueries;
