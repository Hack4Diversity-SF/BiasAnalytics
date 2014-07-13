console.log("gd");
var Datastore = require('nedb');

(function() {
	var db = {};
	db.resumes = new Datastore({ filename: './data/resumes.db', autoload: true }); 
	db.names = new Datastore({ filename: './data/names.db', autoload: true }); 
	db.analysis = new Datastore({ filename: './data/analysis.db', autoload: true });
	console.log("running?");
	var resume = {};
	resume.experience = "blah blah";

	// generate names

	var males = {
		latino : ["Juan", "Jose"],
		black : ["DeJuan", "Jamal"],
		asian : ["Weixin", "Yao"],
		white : ["Cody", "Dustin"]
	}

	var females = {
		latino : ["Maria", "Rosa"],
		black : ["Shanice", "Aliyah"],
		asian : ["Lei", "Mei"],
		white: ["Molly", "Hannah"]
	}

	var last_names = {
		latino : ["Chavez", "Fernandez"],
		black : ["Jackson", "Obama"],
		asian : ["Ming", "Lu"],
		white : ["Brady", "Harbaugh"]
	};

	var top_schools = ["Harvard University", "Yale University", "Princeton University", "Stanford University", "University of California, Berkeley", "Massachusetts Institute of Technology"];
	var less_known_schools = ["Cal Poly San Luis Obispo", "San Jose State", "University of California, Merced", "University of California, Santa Cruz"];

	var races = ["latino", "black", "asian", "white"];
	var genders = ["male", "female"];
	var names = {};
	names.male = males;
	names.female = females;

	//console.log(names["male"]);

	for (var i=0; i< genders.length; i++) {
		for (var j=0; j < races.length; j++) {
			var firsts = names[genders[i]][races[j]];
			for (var k=0; k < firsts.length; k++) {
				var lasts = last_names[races[j]];
				for (var m=0; m < lasts.length; m++) {
					var person = {};
					person.name = firsts[k] + " " + lasts[m];
					person.gender = genders[i];
					person.race = races[j];
					//console.log(person.name + ' ' + person.gender + ' ' + person.race);
					db.names.insert(person, function (err, newDoc) {});
				}	
			}
		}
	}
	module.exports = db;
})()
