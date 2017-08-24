let logoutController = {
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/admin/login');
    }
};


module.exports = logoutController;