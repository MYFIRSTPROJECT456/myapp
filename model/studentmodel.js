var pool = require('../util/dbconnection');

var student = {

	addStudent: function (inputData, cb){
		var sql = "INSERT INTO student(sId, sName, sAddress) VALUES ("+inputData.id+",'"+inputData.fname+"','"+inputData.address+"') ";
		pool.getConnection(function(err, connection){
			if (err) {
				console.log('Connection Error :'+err);
			} else {
				connection.query(sql, function(err, result) {
					if (err) {
						cb(err, null);
					} else {
						cb(null, result);
					}
					//return result;
				});
			}

		});

	},
	editStudent: function (inputData){

	},
	deletStudent: function (inputData){

	},
	getStudent: function() {

	}

}

module.exports  = student;
