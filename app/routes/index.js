var express = require('express');
var router = express.Router();
var db = require('../generate_data');

router.get('/', function(req, res){
        res.sendfile("views/index.html");
});

router.get('/company/:id', function(req, res){
        res.sendfile("views/resumePage.html");
});

/* GET resumes */
router.get('/company/:id/resumes', function(req, res){
	JSONResponse = {
		'pairs': [
			{
				'first': {
					name: 'Juan Lopez',
					gender: 'male',
					race: 'latino',
					control: 'true'
				},
				'second': {
					name: 'Vishesh Sohmshetty',
					gender: 'male',
					race: 'indian',
					control: 'false'
				}
			},
			{
				'first': {
					name: 'Lei Yao',
					gender: 'female',
					race: 'asian',
					control: 'false'
				},
				'second': {
					name: 'Rosa Garcia',
					gender: 'female',
					race: 'latino',
					control: 'true'
				}
			},
			{
				'first': {
					name: 'Aliyah Jackson',
					gender: 'female',
					race: 'black',
					control: 'false'
				},
				'second': {
					name: 'Molly Brady',
					gender: 'female',
					race: 'white',
					control: 'true'
				}
			},
			{
				'first': {
					name: 'Gerardo Martinez',
					gender: 'male',
					race: 'latino',
					control: 'true'
				},
				'second': {
					name: 'Dustin Brown',
					gender: 'male',
					race: 'white',
					control: 'false'
				}
			}
		]
	}
  	res.render(JSON.stringify(JSONResponse));
});

module.exports = router;
