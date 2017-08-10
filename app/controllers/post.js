let PostController = {
    index : (req, res) => {
        res.send('vaooooooo');
    },

    getCreate : (req, res) => {
        res.render('admin/post/create');
    },

    getEdit : (req, res) => {
        res.render('admin/post/edit');
    }
};


module.exports = PostController;