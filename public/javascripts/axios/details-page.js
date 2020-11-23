
    document.getElementById('btn-watchlist').addEventListener('click', (e) => {
        e.preventDefault()

        User
            .findById(req.user.id)
            // .populate('watchlist') // No es necesario popular aquí. SE PUEDE POPULAR ASÏ UN OBJETO??
            .then(user => {
                if (!user.watchlist.includes(req.query.movie_id)) {
                    User.findByIdAndUpdate(req.user.id, watchlist.movies.push(req.query.movie_id))
                }
            })
    });
