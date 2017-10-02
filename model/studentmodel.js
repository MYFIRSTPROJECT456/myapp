var pool = require('../util/dbconnection');

var student = {

	addStudent: function (inputData, cb){
		var sql = "INSERT INTO student(ID, FIRSTNAME, LASTNAME, ADDRESS) VALUES ("+inputData.id+",'"+inputData.fname+"','"+inputData.lname+"','"+inputData.address+"') ";
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
	editStudent: function (inputData, cb){
		//update student set FIRSTNAME='  a ', LASTNAME='b', ADDRESS='c' where id =1;
		var sql = "update student set FIRSTNAME='"+inputData.fname+"',LASTNAME='"+inputData.lname+"',ADDRESS='"+inputData.address+"' WHERE ID = "+inputData.id;
		console.log(sql);
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
	deleteStudent: function (id, cb){
		var sql = "delete from student WHERE id ="+id;
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


	},

	getStudentById: function(id, cb) {
		var sql = "select * from student where id="+id;
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
