var express = require('express');
var router = express.Router();
var studentModel = require('../model/studentmodel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('clear');
  studentModel.getStudent(function(err, result) {
    	if (err) {
    	
    		res.render('studentlist', {err:err});
    	} else  {
    		res.render('studentlist', {data:result});
    	}
    });	
  
});
//add routing 
router.get('/add', function(req, res, next) {
  res.render('add');
});

//delete routing

router.get('/delete', function(req, res, next) {
  var id = req.query.studentid;
  studentModel.deleteStudent(id, function(err, result) {
      res.redirect('/student');
      
    }); 
});

//update routing

router.get('/update', function(req, res, next) {
	var id = req.query.studentid;
	studentModel.getStudentById(id, function(err, result) {
    	if (err) {
    	
    		res.render('studentlist', {err:err});
    	} else  {
    		res.render('update', {data:result});
    	}
    });	

  //res.render('update');
});

//adddata posting

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

//update posting

router.post('/updatedata', function(req, res, next) {
	var studentData = {
   		id : req.body.id,
   		fname : req.body.fname,
   		lname : req.body.lname,
   		address : req.body.address,
    }
    studentModel.editStudent(studentData, function(err, result) {
    	if (err) {
    		var msg = 'Wrong Input';
    		res.redirect('/student/update?studentid='+req.body.id);
    	} else  {
    		res.redirect('/student');
    	}
    });	
    
  	//res.send('respond with a resource');
});



module.exports = router;
