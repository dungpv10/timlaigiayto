
let Auth = {
    check : () => {
        return (req, res, next) => {
            if (req.session.userLogged === undefined) {
                return res.redirect('/admin/login');
            }
            console.log(req.session.userLogged);
            res.locals.auth = req.session.userLogged;
            next();
        }
    },
    isAdmin : () => {
        return (req, res, next) => {
            const userRole = req.session.userLogged.role;
            console.log(userRole);
            next();
        }
    }
};

module.exports = Auth;
