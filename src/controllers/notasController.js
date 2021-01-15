let db = require('../database/models');

module.exports = {
    create: function(req, res) {
        db.Nota.create({
            title: req.body.title,
            text: req.body.text,
        })
        .then(function(nota){
            // res.send("la nota se ha creado exitosamente");
            res.redirect("/")
        })
    },
    edit: function(req, res) {
        db.Nota.findByPk(req.params.id)
        .then(function(unaNota) {
            res.render('detail', {unaNota: unaNota})
        })
    },
    update: function(req, res) {
         db.Nota.update({
             title: req.body.title,
             text: req.body.text
         }, {
            where: {
                id: req.params.id
            }
         })
         .then(function(){
             res.redirect("/")
         })
    
    },
    delete: function(req, res) {
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect("/")
        })
    }

}