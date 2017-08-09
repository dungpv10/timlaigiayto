
$('#create-user').bootstrapValidator({
    fields: {
        firstName: {
            validators: {
                notEmpty: {
                    message: 'Vui lòng không để trống'
                }
            }
        },
        lastName: {
            validators: {
                notEmpty: {
                    message: 'Vui lòng không để trống'
                }
            }
        },
        message: {
            validators: {
                notEmpty: {
                    message: 'Vui lòng không để trống'
                }
            }
        },
        password: {
            validators: {

                notEmpty: {
                    message: 'Vui lòng không để trống'
                }
            }
        },
        confirmpassword: {
            validators: {
                notEmpty: {
                    message: 'Vui lòng không để trống'
                },
                identical: {
                    field: 'password',
                    message: 'Xác nhận mật khẩu không đúng'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'Vui lòng không để trống'
                },
                emailAddress: {
                    message: 'Email sai định dạng'
                }
            }
        }
    }
});
