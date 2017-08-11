
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

$('#create-post').bootstrapValidator({
    fields : {
        title : {
            validators : {
                notEmpty : {
                    message : 'Vui lòng không để trống'
                },
                stringLength : {
                    message : 'Tên danh mục phải lớn hơn 10 và nhỏ hơn 200 kí tự',
                    min : 10,
                    max : 200
                }
            }
        },
        fullName : {
            validators : {
                notEmpty : {
                    message : 'Vui lòng không để trống'
                },
                stringLength : {
                    message : 'Tên người phải lớn hơn 2 và nhỏ hơn 100 kí tự',
                    min : 2,
                    max : 100
                }
            }
        },
        numberPhone : {
            validators : {
                notEmpty : {
                    message : 'Vui lòng không để trống'
                },
                stringLength : {
                    message : 'Số điện thoại phải lớn hơn 8 và nhỏ hơn 12 kí tự',
                    min : 8,
                    max : 12
                },
                integer: {
                    message : 'Số điện thoại phải là số nguyên'
                }
            }
        },
        email : {
            validators : {
                email : {
                    message : 'Email sai định dạng'
                }
            }
        },
        position : {
            validators : {
                notEmpty : {
                    message : 'Vui lòng không để trống'
                },
                stringLength : {
                    message : 'Vị trí phải lớn hơn 3 và nhỏ hơn 100 kí tự',
                    min : 3,
                    max : 100
                }
            }
        },
        content : {
            validators : {
                notEmpty : {
                    message : 'Vui lòng không để trống'
                },
                stringLength : {
                    message : 'Nội dung phải lớn hơn 20 và nhỏ hơn 255 kí tự',
                    min : 20,
                    max: 255
                }
            }
        }
    }
});


