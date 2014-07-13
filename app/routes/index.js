var express = require('express');
var router = express.Router();
var db = require('../generate_data');

router.get('/', function(req, res){
        res.render("index", {title:"We are here"});
});

router.get('/company/:id', function(req, res){
        res.sendfile("views/resumePage.html");
});

/* GET resumes */
router.get('/company/:id/resumes', function(req, res){
	JSONResponse = [
				{
					name: 'Juan Lopez',
					gender: 'male',
					race: 'latino',
					control: 'true'
				},
				{
					name: 'Vishesh Sohmshetty',
					gender: 'male',
					race: 'indian',
					control: 'false'
				},
				{
					name: 'Lei Yao',
					gender: 'female',
					race: 'asian',
					control: 'false'
				},
				{
					name: 'Rosa Garcia',
					gender: 'female',
					race: 'latino',
					control: 'true'
				},
				{
					name: 'Aliyah Jackson',
					gender: 'female',
					race: 'black',
					control: 'false'
				},
				{
					name: 'Molly Brady',
					gender: 'female',
					race: 'white',
					control: 'true'
				},
				{
					name: 'Gerardo Martinez',
					gender: 'male',
					race: 'latino',
					control: 'true'
				},
				{
					name: 'Dustin Brown',
					gender: 'male',
					race: 'white',
					control: 'false'
				}
		]
  	res.send(JSON.stringify(JSONResponse));
});

module.exports = router;
