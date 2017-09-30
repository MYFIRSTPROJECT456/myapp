var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('studentlist');
});

router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/adddata', function(req, res, next) {
	console.log(req.body);
   var studentData = {
   		id : req.body.id,
   		fname : req.body.fname,
   		lname : req.body.lname,
   		address : req.body.address,
        

   }
   console.log(studentData);	
  res.send('respond with a resource');
});

module.exports = router;