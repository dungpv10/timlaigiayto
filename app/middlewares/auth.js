
let Auth = {
    check : () => {
        return (req, res, next) => {
            if (req.session.userLogged === undefined) return res.redirect('/admin/login');
            res.locals.auth = req.session.userLogged;
            next();
        }
    },
    isAdmin : () => {
        return (req, res, next) => req.session.userLogged.role === '598c901dbf8d080794fdf219' ? next() : res.redirect('/');
    }
};

module.exports = Auth;
