let db = require('../../../dbmanager/mysql/db')

let TestProvider = {

	create: function(name, mobile){
        let query = "INSERT INTO human (`name`, `mobile`) VALUES (?, ?) ";
        return db.querySql(query, [name, mobile]);
    },

    getById: function(id){
        let query = "SELECT * FROM human where id = ?";
        return db.querySql(query, [id]);
    }

};

module.exports = TestProvider;