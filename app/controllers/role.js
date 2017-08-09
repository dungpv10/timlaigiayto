
let Role = require('../models/Role');
module.exports = {
    index : (req, res) => {
        Role.getAll().then((roles) => {
            res.render('admin/role/index', {roles : roles});
        }).catch((err) => {
            console.log(err);
        });

    },

    getCreate : (req, res) => {
        res.render('admin/role/create');
    },

    postCreate : (req, res) => {
        let role = new Role(req.body);

        role.save(function(err){
            if(err) console.log(err);
            else res.redirect('/admin/roles');
        });

    },

    getEdit : (req, res) => {
        Role.findOneById(req.params.id).then((role) => {
            res.render('admin/role/edit', {role : role});
        }).catch((err) => {
            console.log(err);
        });
    },

    postUpdate : (req, res) => {
        Role.updateById(req.body.id, req.body).then((role) => {
            res.redirect('/admin/roles');
        }).catch((err) => {
            console.log(err);
        });
    },

    destroy : (req, res) => {
        Role.delete(req.body.id).then(() => {
            res.redirect('back');
        }).catch((err) => {
            console.log(err);
        });
    }
};