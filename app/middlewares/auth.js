let Auth = {
    init : () => {
        return (req, res, next) => {
            if (!req.session.userLogged){
                return redirect('/');
            }
            next();
        }
    }
};

module.exports = Auth;
