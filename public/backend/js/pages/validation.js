
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

$('#update-user').bootstrapValidator({
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
            }
        },
        confirmpassword: {
            validators: {
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


$('#create-category').bootstrapValidator({
    fields : {
        name : {
            validators : {
                notEmpty : {
                    message : 'Vui lòng không để trống'
                },
                stringLength : {
                    message : 'Tên danh mục phải lớn hơn 3 và nhỏ hơn 200 kí tự',
                    min : 3,
                    max: 200
                }
            }
        }
    }
});