var express = require('express');
//var jade = require('jade');
var app = express();

//app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.sendfile("frontend/resumePage.html");
	//res.render("frontend/resumePage.html");
});


app.get('/company/:id/resumes', function(req, res){
	res.send('[{"name":"John Doe", "university":"ISU"}, {"name":"Jane Doe", "university":"UVA"}]');
    });

app.listen(2222);
