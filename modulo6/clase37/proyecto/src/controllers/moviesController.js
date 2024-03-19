const db = require('../database/models');

const controller = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((resp) => res.render('moviesList', { movies:resp }))
            .catch((err) => res.render(err));
        
    }
}

module.exports = controller;