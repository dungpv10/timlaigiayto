const EmailRegister = require('../models/EmailRegister');
let EmailController = {
    index: (req, res) => {
        EmailRegister.getAll().then(emails => res.render('admin/email/index', {emails: emails})).catch(err => console.log(err));
    }
};

module.exports = EmailController;
