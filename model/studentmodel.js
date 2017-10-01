var pool = require('../util/dbconnection');

var student = {

	addStudent: function (inputData, cb){
		var sql = "INSERT INTO student(ID, FIRSTNAME, LASTNAME, ADDRESS) VALUES ("+inputData.id+",'"+inputData.fname+"','"+inputData.fname+"','"+inputData.address+"') ";
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
	getStudent: function(cb) {
		var sql = "select * from student";
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


	}

}

module.exports  = student;
