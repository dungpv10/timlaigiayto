
let Auth = {
    check : () => {
        return (req, res, next) => {
            if (req.session.userLogged === undefined) return res.redirect('/admin/login');
            res.locals.auth = req.session.userLogged;
            next();
        }
    },
    isAdmin : () => {
        // return (req, res, next) => req.session.userLogged.role === '598a96217bf19809a41d83fe' ? next() : res.redirect('/');
        return next();
    }
};

module.exports = Auth;
