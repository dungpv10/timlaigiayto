const userStatus = require('../../configs/params').userStatus;
let lib = {
    getUserStatusName : (idUserStatus) => {
        for(let i = 0; i < userStatus.length; i++){
            if(idUserStatus === userStatus[i].id.toString()) return userStatus[i].name;
        }

        return 'Không xác định';
    }
};


module.exports = lib;