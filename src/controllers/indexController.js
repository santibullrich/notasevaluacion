let db = require('../database/models');

module.exports = {
        index: function(req, res) {
            db.Nota.findAll()
            .then(function(nota) {
                return res.render('index', {nota: nota})
            })        
        }
    }