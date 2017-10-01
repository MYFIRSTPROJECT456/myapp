var express = require('express');
var router = express.Router();
var studentModel = require('../model/studentmodel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  studentModel.getStudent(function(err, result) {
    	if (err) {
    	
    		res.render('studentlist', {err:err});
    	} else  {
    		res.render('studentlist', {data:result});
    	}
    });	
  
});

router.get('/add', function(req, res, next) {
  res.render('add');
});
router.get('/update', function(req, res, next) {
  res.render('update');
});

router.post('/adddata', function(req, res, next) {
	var studentData = {
   		id : req.body.id,
   		fname : req.body.fname,
   		lname : req.body.lname,
   		address : req.body.address,
    }
    studentModel.addStudent(studentData, function(err, result) {
    	if (err) {
    		var msg = 'Wrong Input';
    		res.redirect('/student/add?err='+msg);
    	} else  {
    		res.redirect('/student');
    	}
    });	
    
  	//res.send('respond with a resource');
});

module.exports = router;
