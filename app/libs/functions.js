const params = require('../../configs/params');
let lib = {
    getName : function(arr, id) {
        const length = arr.length;
        for(let i = 0; i < length; i++){
            if(id === arr[i].id.toString()) return arr[i].name;
        }

        return 'Không xác định';
    },
    getUserStatusName : function(idUserStatus) {
        return this.getName(params.userStatus, idUserStatus);
    },

    getPostStatusName : function(idPostStatus){
        return this.getName(params.postStatus, idPostStatus);
    }
};


module.exports = lib;