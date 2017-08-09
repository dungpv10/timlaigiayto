let User = require('../models/User');
let Role = require('../models/Role');
module.exports = {
    index: (req, res) => {
        User.getAll().then(users => {
            res.render('admin/user/index', {users: users});
        }).catch(err => {
            console.log(err);
        });
    },
    getCreate: (req, res) => {
        Role.selectBox().then(selectBox => {
            res.render('admin/user/create', {selectRoleBox: selectBox});
        }).catch(err => {
            console.log(err);
        });

    },
    postCreate: (req, res) => {
        User.insert(req.body).then(() => {
            res.redirect('/admin/users');
        }).catch(err => {
            console.log(err);
        });
    },

    getEdit : (req, res) => {
        Promise.all([
            User.findOneById(req.params.id),
            Role.selectBox()
        ]).then((data) => {
            res.render('admin/user/edit', {user : data[0], selectRoleBox : data[1]});
        }).catch(err => {
            console.log(err);
        });
    },

    postUpdate: (req, res) => {
        User.updateById(req.body.id, req.body);
    }
};