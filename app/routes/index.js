var express = require('express');
var router = express.Router();
var db = require('../generate_data');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET resumes */
router.'/company/:id/resumes', function(req, res){
	JSONResponse = {
		'pairs': [
			{
				'first': {
					name: 'Vishesh Sohmshetty',
					gender: 'male',
					race: 'indian'
				},
				'second': {
					name: 'Juan Lopez',
					gender: 'male',
					race: 'latino'
				}
			},
			{
				'first': {
					name: 'Lei Yao',
					gender: 'female',
					race: 'asian'
				},
				'second': {
					name: 'Rosa Garcia',
					gender: 'female',
					race: 'latino'
				}
			},
			{
				'first': {
					name: 'Aliyah Jackson',
					gender: 'female',
					race: 'black'
				},
				'second': {
					name: 'Molly Brady',
					gender: 'female',
					race: 'white'
				}
			},
			{
				'first': {
					name: 'Dustin Brown',
					gender: 'male',
					race: 'white'
				},
				'second': {
					name: 'Gerardo Martinez',
					gender: 'male',
					race: 'latino'
				}
			}


		]
	}
  	res.render('index', { title: 'Express' });
});

module.exports = router;
